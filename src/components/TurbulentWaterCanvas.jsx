import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TurbulentWaterCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene & Perspective Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    )
    camera.position.set(0, 0, 20)

    // High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Persona 3 Reload Lighting: Deep Tartarus Ambient + High-Contrast Cyan & Crimson Lights
    const ambientLight = new THREE.AmbientLight(0x051329, 2.8)
    scene.add(ambientLight)

    const dirLightCyan = new THREE.DirectionalLight(0x00d2ff, 4.5)
    dirLightCyan.position.set(16, 18, 12)
    scene.add(dirLightCyan)

    const dirLightCrimson = new THREE.DirectionalLight(0xff184c, 3.8)
    dirLightCrimson.position.set(-16, -12, 10)
    scene.add(dirLightCrimson)

    const centerGlow = new THREE.PointLight(0x00d2ff, 2.0, 35)
    centerGlow.position.set(0, 0, 8)
    scene.add(centerGlow)

    // --- 1. P3R SUBMERGED WATER CAUSTICS / WAVE MESH (DEEP BACKGROUND) ---
    const waveGeo = new THREE.PlaneGeometry(65, 45, 36, 26)
    const waveMat = new THREE.MeshStandardMaterial({
      color: 0x002b66,
      emissive: 0x001433,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    })
    const waveMesh = new THREE.Mesh(waveGeo, waveMat)
    waveMesh.position.set(0, 0, -14)
    scene.add(waveMesh)

    // Store base wave positions for procedural ripple
    const wavePosAttr = waveGeo.attributes.position
    const waveOrigPos = new Float32Array(wavePosAttr.count * 3)
    for (let w = 0; w < wavePosAttr.count * 3; w++) {
      waveOrigPos[w] = wavePosAttr.array[w]
    }

    // --- 2. HOLOGRAPHIC TAROT CARDS & FLOATING CRYSTAL SHARDS ---
    const palette = [
      { color: 0xff184c, emissive: 0x5a0014, line: 0xff4d79 }, // SEES Crimson
      { color: 0x00d2ff, emissive: 0x003355, line: 0x80e7ff }, // Electric Cyan
      { color: 0xffcc00, emissive: 0x4a3b00, line: 0xffe680 }, // Stat Gold
      { color: 0x0048d0, emissive: 0x001855, line: 0x4d88ff }, // Atlus Royal Blue
      { color: 0xffffff, emissive: 0x1a2636, line: 0xffffff }, // Glass White
    ]

    const cardGeo = new THREE.BoxGeometry(0.75, 1.3, 0.04)
    const cardEdgeGeo = new THREE.EdgesGeometry(cardGeo)

    const tetraGeo = new THREE.TetrahedronGeometry(0.55, 0)
    const tetraEdgeGeo = new THREE.EdgesGeometry(tetraGeo)

    const octaGeo = new THREE.OctahedronGeometry(0.5, 0)
    const octaEdgeGeo = new THREE.EdgesGeometry(octaGeo)

    const ringGeo = new THREE.TorusGeometry(0.42, 0.06, 4, 4)
    const shardGeo = new THREE.ConeGeometry(0.35, 1.2, 3)

    const shardTypes = [
      { geo: cardGeo, edge: cardEdgeGeo, isCard: true },
      { geo: tetraGeo, edge: tetraEdgeGeo },
      { geo: octaGeo, edge: octaEdgeGeo },
      { geo: ringGeo, edge: null },
      { geo: shardGeo, edge: null },
    ]

    const objects = []
    const totalShards = 75

    for (let i = 0; i < totalShards; i++) {
      const type = shardTypes[i % shardTypes.length]
      const theme = palette[Math.floor(Math.random() * palette.length)]

      // Faceted Shard Material
      const mat = new THREE.MeshStandardMaterial({
        color: theme.color,
        emissive: theme.emissive,
        roughness: 0.15,
        metalness: 0.8,
        flatShading: true,
        transparent: true,
        opacity: Math.random() * 0.35 + 0.6,
        side: THREE.DoubleSide,
      })

      const group = new THREE.Group()
      const mesh = new THREE.Mesh(type.geo, mat)
      group.add(mesh)

      // Add Glowing Holographic Wireframe Edges to Cards and Prisms
      if (type.edge) {
        const lineMat = new THREE.LineBasicMaterial({
          color: theme.line,
          transparent: true,
          opacity: 0.85,
        })
        const lines = new THREE.LineSegments(type.edge, lineMat)
        group.add(lines)
      }

      // Distribute outer margins (balanced left and right, keep center readable)
      const isLeft = i % 2 === 0
      const side = isLeft ? -1 : 1
      const x = side * (Math.random() * 11 + 5.2)
      const y = (Math.random() - 0.5) * 24
      const z = (Math.random() - 0.5) * 11

      group.position.set(x, y, z)

      const scale = Math.random() * 0.65 + 0.5
      group.scale.set(scale, scale, scale)

      group.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      objects.push({
        group,
        baseX: x,
        baseY: y,
        baseZ: z,
        rotSpeedX: (Math.random() - 0.5) * 0.018,
        rotSpeedY: (Math.random() - 0.5) * 0.024,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        floatFreq: Math.random() * 0.7 + 0.5,
        floatAmp: Math.random() * 0.55 + 0.3,
        phase: Math.random() * Math.PI * 2,
        isLeft,
      })

      scene.add(group)
    }

    // --- 3. UNDERWATER BUBBLES / RISING DARK HOUR MOTES ---
    const bubbleCount = 200
    const bubbleGeo = new THREE.BufferGeometry()
    const bubblePos = new Float32Array(bubbleCount * 3)
    const bubbleColor = new Float32Array(bubbleCount * 3)
    const bubbleSpeeds = new Float32Array(bubbleCount)

    const colCyan = new THREE.Color(0x00d2ff)
    const colRed = new THREE.Color(0xff184c)
    const colGold = new THREE.Color(0xffcc00)
    const colWhite = new THREE.Color(0xffffff)

    for (let b = 0; b < bubbleCount; b++) {
      bubblePos[b * 3 + 0] = (Math.random() - 0.5) * 36
      bubblePos[b * 3 + 1] = (Math.random() - 0.5) * 28
      bubblePos[b * 3 + 2] = (Math.random() - 0.5) * 16

      const colChoice = b % 4 === 0 ? colCyan : b % 4 === 1 ? colRed : b % 4 === 2 ? colGold : colWhite
      bubbleColor[b * 3 + 0] = colChoice.r
      bubbleColor[b * 3 + 1] = colChoice.g
      bubbleColor[b * 3 + 2] = colChoice.b

      bubbleSpeeds[b] = Math.random() * 0.025 + 0.012
    }

    bubbleGeo.setAttribute('position', new THREE.BufferAttribute(bubblePos, 3))
    bubbleGeo.setAttribute('color', new THREE.BufferAttribute(bubbleColor, 3))

    const bubbleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const bubbles = new THREE.Points(bubbleGeo, bubbleMat)
    scene.add(bubbles)

    // --- 4. CLICK SHOCKWAVE / EXPANDING RIPPLE RING ---
    const shockwaveGeo = new THREE.RingGeometry(0.1, 0.25, 32)
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    })
    const shockwave = new THREE.Mesh(shockwaveGeo, shockwaveMat)
    shockwave.position.set(0, 0, 5)
    scene.add(shockwave)
    let shockwaveScale = 0
    let shockwaveOpacity = 0

    // Mouse Tracking
    let targetMouseX = 0
    let targetMouseY = 0

    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onClick = (e) => {
      // Trigger expanding P3R shockwave at mouse location
      const rayX = (e.clientX / window.innerWidth) * 2 - 1
      const rayY = -(e.clientY / window.innerHeight) * 2 + 1
      shockwave.position.set(rayX * 12, rayY * 8, 4)
      shockwaveScale = 0.5
      shockwaveOpacity = 0.95
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('click', onClick, { passive: true })

    // Window Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let reqId
    const clock = new THREE.Clock()

    const animate = () => {
      reqId = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()
      const currentScrollY = window.scrollY
      const deltaScroll = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY

      scrollVelocity = THREE.MathUtils.lerp(
        scrollVelocity,
        deltaScroll * 0.02,
        0.08
      )

      // Smooth Camera Response to Mouse & Scroll
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetMouseX * 2.0, 0.04)
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetMouseY * 1.5 - (currentScrollY * 0.0022),
        0.04
      )

      // --- Wave Caustics Vertex Animation ---
      const waveArray = wavePosAttr.array
      for (let idx = 0; idx < wavePosAttr.count; idx++) {
        const ox = waveOrigPos[idx * 3 + 0]
        const oy = waveOrigPos[idx * 3 + 1]
        // Dual undulating sine waves
        const waveZ = Math.sin(ox * 0.28 + elapsed * 1.1) * 0.75 + Math.cos(oy * 0.35 + elapsed * 0.9) * 0.65
        waveArray[idx * 3 + 2] = waveZ
      }
      wavePosAttr.needsUpdate = true

      // --- Interactive Repulsion Coordinates ---
      const mouseWorldX = targetMouseX * 13
      const mouseWorldY = targetMouseY * 9.5

      // --- Floating Shards & Cards Animation ---
      for (let k = 0; k < objects.length; k++) {
        const item = objects[k]

        // Rotation acceleration on scroll
        item.group.rotation.x += item.rotSpeedX * (1 + scrollVelocity * 2.8)
        item.group.rotation.y += item.rotSpeedY * (1 + scrollVelocity * 2.8)
        item.group.rotation.z += item.rotSpeedZ

        // Harmonic Floating
        const floatY = Math.sin(elapsed * item.floatFreq + item.phase) * item.floatAmp
        const floatX = Math.cos(elapsed * 0.65 + item.phase) * 0.3

        // Gentle Continuous Upward Drift
        item.baseY += 0.005 + (scrollVelocity * 0.02)
        if (item.baseY > 15) item.baseY = -15

        // Cursor Repulsion Physics (shards scatter gently when cursor approaches)
        let pushX = 0
        let pushY = 0
        const currentTargetX = item.baseX + floatX
        const currentTargetY = item.baseY + floatY
        const dx = currentTargetX - mouseWorldX
        const dy = currentTargetY - mouseWorldY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 5.0 && dist > 0.01) {
          const force = (1 - dist / 5.0) * 2.2
          pushX = (dx / dist) * force
          pushY = (dy / dist) * force
        }

        item.group.position.x = THREE.MathUtils.lerp(item.group.position.x, currentTargetX + pushX, 0.08)
        item.group.position.y = THREE.MathUtils.lerp(item.group.position.y, currentTargetY + pushY, 0.08)
      }

      // --- Rising Bubbles Animation ---
      const bArray = bubbleGeo.attributes.position.array
      for (let b = 0; b < bubbleCount; b++) {
        bArray[b * 3 + 1] += bubbleSpeeds[b] + (scrollVelocity * 0.015)
        // Sway horizontally like bubbles in water
        bArray[b * 3 + 0] += Math.sin(elapsed * 1.5 + b) * 0.008

        if (bArray[b * 3 + 1] > 16) {
          bArray[b * 3 + 1] = -16
          bArray[b * 3 + 0] = (Math.random() - 0.5) * 36
        }
      }
      bubbleGeo.attributes.position.needsUpdate = true

      // --- Expanding Click Shockwave ---
      if (shockwaveOpacity > 0.01) {
        shockwaveScale += 0.4
        shockwaveOpacity *= 0.92
        shockwave.scale.set(shockwaveScale, shockwaveScale, 1)
        shockwaveMat.opacity = shockwaveOpacity
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      waveGeo.dispose()
      waveMat.dispose()
      cardGeo.dispose()
      cardEdgeGeo.dispose()
      tetraGeo.dispose()
      tetraEdgeGeo.dispose()
      octaGeo.dispose()
      octaEdgeGeo.dispose()
      ringGeo.dispose()
      shardGeo.dispose()
      bubbleGeo.dispose()
      bubbleMat.dispose()
      shockwaveGeo.dispose()
      shockwaveMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  )
}

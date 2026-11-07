import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TurbulentWaterCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.set(0, 0, 20)

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0x061530, 2.0)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0x00d2ff, 4.0)
    dirLight1.position.set(12, 14, 10)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0xff184c, 3.0)
    dirLight2.position.set(-12, -10, 8)
    scene.add(dirLight2)

    const pointLightCenter = new THREE.PointLight(0x00d2ff, 2.5, 30)
    pointLightCenter.position.set(0, 0, 5)
    scene.add(pointLightCenter)

    // Persona 3 Reload Signature Colors
    const palette = [
      { color: 0xff184c, emissive: 0x4a0010 }, // SEES Crimson
      { color: 0x00d2ff, emissive: 0x002c40 }, // Electric Cyan
      { color: 0xffcc00, emissive: 0x3d3000 }, // Stat Gold
      { color: 0x0055ff, emissive: 0x001040 }, // Royal Atlus Blue
      { color: 0xffffff, emissive: 0x112233 }, // Glass White
      { color: 0x00ffcc, emissive: 0x003322 }, // Neon Mint
    ]

    // Varied Geometry Types: Tarot Cards, Polyhedrons, Torus Diamonds, Shards
    const geometries = {
      card: new THREE.BoxGeometry(0.7, 1.2, 0.04), // Tarot / Status Card
      tetra: new THREE.TetrahedronGeometry(0.55, 0), // Sharp Prism
      octa: new THREE.OctahedronGeometry(0.5, 0), // Diamond Crystal
      icosa: new THREE.IcosahedronGeometry(0.45, 0), // Polyhedral Gem
      ring: new THREE.TorusGeometry(0.4, 0.06, 4, 4), // Angular Diamond Ring
      shard: new THREE.ConeGeometry(0.35, 1.1, 3), // Slanted Ribbon Shard
    }

    const geoKeys = Object.keys(geometries)

    // Distribute objects: DENSE ON LEFT & RIGHT, light & deep in center
    const objects = []
    const totalCount = 80

    for (let i = 0; i < totalCount; i++) {
      const geoType = geoKeys[i % geoKeys.length]
      const geo = geometries[geoType]
      const theme = palette[Math.floor(Math.random() * palette.length)]

      const mat = new THREE.MeshStandardMaterial({
        color: theme.color,
        emissive: theme.emissive,
        roughness: 0.18,
        metalness: 0.75,
        flatShading: true,
        transparent: true,
        opacity: Math.random() * 0.4 + 0.55,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geo, mat)

      // Balanced left/right distribution ("Rata Kiri Kanan")
      const isLeft = i % 2 === 0
      const side = isLeft ? -1 : 1

      // X spans outer margins: ±(5 to 16)
      const x = side * (Math.random() * 11 + 5)
      // Y spans vertical viewport
      const y = (Math.random() - 0.5) * 22
      // Z spans depth layers
      const z = (Math.random() - 0.5) * 12

      mesh.position.set(x, y, z)

      const scale = Math.random() * 0.7 + 0.5
      mesh.scale.set(scale, scale, scale)

      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      objects.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        rotSpeedX: (Math.random() - 0.5) * 0.016,
        rotSpeedY: (Math.random() - 0.5) * 0.022,
        rotSpeedZ: (Math.random() - 0.5) * 0.014,
        floatFreq: Math.random() * 0.6 + 0.5,
        floatAmp: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        isLeft,
      })

      scene.add(mesh)
    }

    // 10 deep background ambient cards in center for subtle depth
    for (let j = 0; j < 12; j++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0x00d2ff,
        emissive: 0x001020,
        roughness: 0.3,
        metalness: 0.8,
        flatShading: true,
        transparent: true,
        opacity: 0.22,
      })
      const centerCard = new THREE.Mesh(geometries.card, mat)
      const cx = (Math.random() - 0.5) * 8
      const cy = (Math.random() - 0.5) * 20
      const cz = -(Math.random() * 8 + 8) // Deep behind text

      centerCard.position.set(cx, cy, cz)
      centerCard.scale.set(0.6, 0.6, 0.6)
      scene.add(centerCard)

      objects.push({
        mesh: centerCard,
        baseX: cx,
        baseY: cy,
        baseZ: cz,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
        rotSpeedZ: (Math.random() - 0.5) * 0.006,
        floatFreq: 0.4,
        floatAmp: 0.3,
        phase: Math.random() * Math.PI * 2,
        isLeft: false,
      })
    }

    // Sparkle Particle Field (Persona Blue, Cyan, Crimson & Gold Sparks)
    const particleCount = 260
    const particleGeo = new THREE.BufferGeometry()
    const posArr = new Float32Array(particleCount * 3)
    const colArr = new Float32Array(particleCount * 3)

    const cCyan = new THREE.Color(0x00d2ff)
    const cRed = new THREE.Color(0xff184c)
    const cGold = new THREE.Color(0xffcc00)

    for (let p = 0; p < particleCount; p++) {
      posArr[p * 3 + 0] = (Math.random() - 0.5) * 32
      posArr[p * 3 + 1] = (Math.random() - 0.5) * 26
      posArr[p * 3 + 2] = (Math.random() - 0.5) * 14

      const randCol = p % 3 === 0 ? cRed : p % 3 === 1 ? cCyan : cGold
      colArr[p * 3 + 0] = randCol.r
      colArr[p * 3 + 1] = randCol.g
      colArr[p * 3 + 2] = randCol.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colArr, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse Tracking
    let targetMouseX = 0
    let targetMouseY = 0
    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Window Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop with Scroll & Parallax
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
        deltaScroll * 0.018,
        0.08
      )

      // Camera responds smoothly to mouse and scroll depth
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetMouseX * 1.8, 0.04)
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetMouseY * 1.4 - (currentScrollY * 0.0022),
        0.04
      )

      // Lusion-style Mouse World Target for interactive repulsion
      const mouseWorldX = targetMouseX * 13
      const mouseWorldY = targetMouseY * 9.5

      // Animate floating items
      for (let k = 0; k < objects.length; k++) {
        const item = objects[k]

        // Rotation spins faster during scroll
        item.mesh.rotation.x += item.rotSpeedX * (1 + scrollVelocity * 2.5)
        item.mesh.rotation.y += item.rotSpeedY * (1 + scrollVelocity * 2.5)
        item.mesh.rotation.z += item.rotSpeedZ

        // Harmonic Floating
        const floatY = Math.sin(elapsed * item.floatFreq + item.phase) * item.floatAmp
        const floatX = Math.cos(elapsed * 0.6 + item.phase) * 0.25

        // Continuous subtle upward drift
        item.baseY += 0.004 + (scrollVelocity * 0.02)
        if (item.baseY > 14) item.baseY = -14

        // Lusion.co Cursor Repulsion Physics (shards scatter gently when cursor approaches)
        let pushX = 0
        let pushY = 0
        const currentTargetX = item.baseX + floatX
        const currentTargetY = item.baseY + floatY
        const dx = currentTargetX - mouseWorldX
        const dy = currentTargetY - mouseWorldY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 4.8 && dist > 0.01) {
          const force = (1 - dist / 4.8) * 2.0
          pushX = (dx / dist) * force
          pushY = (dy / dist) * force
        }

        item.mesh.position.x = THREE.MathUtils.lerp(item.mesh.position.x, currentTargetX + pushX, 0.08)
        item.mesh.position.y = THREE.MathUtils.lerp(item.mesh.position.y, currentTargetY + pushY, 0.08)
      }

      // Rotate particle dust cloud
      particles.rotation.y = elapsed * 0.025
      particles.rotation.x = elapsed * 0.015

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      Object.values(geometries).forEach((g) => g.dispose())
      particleGeo.dispose()
      particleMat.dispose()
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

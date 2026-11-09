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
      100
    )
    camera.position.set(0, 0, 18)

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Atmospheric Nature Lighting (Warm Sun + Soft Sky Ambient)
    const ambientLight = new THREE.AmbientLight(0x163024, 2.8)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0xfff5d6, 3.5)
    sunLight.position.set(12, 16, 10)
    scene.add(sunLight)

    const skyLight = new THREE.DirectionalLight(0x93c5fd, 1.8)
    skyLight.position.set(-10, -6, 6)
    scene.add(skyLight)

    // 1. Procedural Organic Leaf Shape
    const leafShape = new THREE.Shape()
    leafShape.moveTo(0, -0.6)
    leafShape.bezierCurveTo(0.4, -0.2, 0.45, 0.3, 0, 0.7)
    leafShape.bezierCurveTo(-0.45, 0.3, -0.4, -0.2, 0, -0.6)
    const leafGeometry = new THREE.ShapeGeometry(leafShape, 8)
    leafGeometry.center()

    // 2. Frieren Blue Flower Petal Shape
    const petalShape = new THREE.Shape()
    petalShape.moveTo(0, -0.4)
    petalShape.bezierCurveTo(0.32, -0.1, 0.36, 0.3, 0, 0.52)
    petalShape.bezierCurveTo(-0.36, 0.3, -0.32, -0.1, 0, -0.4)
    const petalGeometry = new THREE.ShapeGeometry(petalShape, 6)
    petalGeometry.center()

    // Foliage & Petal Colors (Frieren Blue Petals, Fresh Green, Sunlit Gold Leaves)
    const leafPalettes = [
      { color: 0x38bdf8, emissive: 0x022e3d }, // Mirre Blue Petal
      { color: 0x7dd3fc, emissive: 0x082b4a }, // Soft Sky Petal
      { color: 0x34d399, emissive: 0x043020 }, // Emerald Leaf
      { color: 0x10b981, emissive: 0x022617 }, // Forest Green Leaf
      { color: 0xfbbf24, emissive: 0x3b2400 }, // Golden Autumn Leaf
      { color: 0xf59e0b, emissive: 0x3b1b02 }, // Warm Amber Leaf
      { color: 0xa7f3d0, emissive: 0x063a26 }, // Pale Meadow Sprout
    ]

    const leafObjects = []
    const totalLeaves = 80

    for (let i = 0; i < totalLeaves; i++) {
      const isPetal = i % 3 === 0
      const geo = isPetal ? petalGeometry : leafGeometry
      const theme = leafPalettes[Math.floor(Math.random() * leafPalettes.length)]

      const material = new THREE.MeshStandardMaterial({
        color: theme.color,
        emissive: theme.emissive,
        roughness: 0.3,
        metalness: 0.08,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: Math.random() * 0.35 + 0.6,
      })

      const mesh = new THREE.Mesh(geo, material)

      const startX = (Math.random() - 0.5) * 34
      const startY = (Math.random() - 0.5) * 26
      const startZ = (Math.random() - 0.5) * 14

      mesh.position.set(startX, startY, startZ)

      const baseScale = isPetal ? Math.random() * 0.4 + 0.35 : Math.random() * 0.5 + 0.45
      mesh.scale.set(baseScale, baseScale, baseScale)

      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      leafObjects.push({
        mesh,
        baseX: startX,
        baseY: startY,
        baseZ: startZ,
        fallSpeed: Math.random() * 0.015 + 0.007,
        swayFreq: Math.random() * 1.4 + 0.7,
        swayAmp: Math.random() * 0.65 + 0.35,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.024,
        rotSpeedZ: (Math.random() - 0.5) * 0.018,
        phase: Math.random() * Math.PI * 2,
      })

      scene.add(mesh)
    }

    // 3. Gentle Breeze Wind Trails (Angin Sepoi-sepoi Curves)
    const windStreaks = []
    const streakCount = 14

    for (let s = 0; s < streakCount; s++) {
      const curvePoints = []
      const length = Math.random() * 6 + 5
      const segments = 16

      for (let p = 0; p <= segments; p++) {
        const u = (p / segments) * length
        const v = Math.sin((p / segments) * Math.PI * 2) * 0.35
        curvePoints.push(new THREE.Vector3(u, v, 0))
      }

      const streakGeo = new THREE.BufferGeometry().setFromPoints(curvePoints)
      const streakMat = new THREE.LineBasicMaterial({
        color: s % 2 === 0 ? 0xffffff : 0x7dd3fc,
        transparent: true,
        opacity: Math.random() * 0.15 + 0.08,
        blending: THREE.AdditiveBlending,
      })

      const streak = new THREE.Line(streakGeo, streakMat)
      const sx = (Math.random() - 0.5) * 36 - 15
      const sy = (Math.random() - 0.5) * 24
      const sz = (Math.random() - 0.5) * 10

      streak.position.set(sx, sy, sz)
      scene.add(streak)

      windStreaks.push({
        line: streak,
        geo: streakGeo,
        speed: Math.random() * 0.04 + 0.025,
        baseY: sy,
        baseZ: sz,
        freq: Math.random() * 1.5 + 0.8,
        phase: Math.random() * Math.PI * 2,
      })
    }

    // 4. Sunlight Dust & Magic Spores
    const sporeCount = 220
    const sporeGeo = new THREE.BufferGeometry()
    const sporePos = new Float32Array(sporeCount * 3)
    const sporeCol = new Float32Array(sporeCount * 3)

    const cSun = new THREE.Color(0xfef08a)
    const cMana = new THREE.Color(0x38bdf8)
    const cGreen = new THREE.Color(0x6ee7b7)

    for (let p = 0; p < sporeCount; p++) {
      sporePos[p * 3 + 0] = (Math.random() - 0.5) * 34
      sporePos[p * 3 + 1] = (Math.random() - 0.5) * 28
      sporePos[p * 3 + 2] = (Math.random() - 0.5) * 16

      const colChoice = p % 3 === 0 ? cSun : p % 3 === 1 ? cMana : cGreen
      sporeCol[p * 3 + 0] = colChoice.r
      sporeCol[p * 3 + 1] = colChoice.g
      sporeCol[p * 3 + 2] = colChoice.b
    }

    sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3))
    sporeGeo.setAttribute('color', new THREE.BufferAttribute(sporeCol, 3))

    const sporeMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const spores = new THREE.Points(sporeGeo, sporeMat)
    scene.add(spores)

    // Interactive Wind Tracking with Mouse
    let targetMouseX = 0
    let targetMouseY = 0
    let mouseVelocityX = 0
    let mouseVelocityY = 0
    let prevMouseX = 0
    let prevMouseY = 0

    const onMouseMove = (e) => {
      const curX = (e.clientX / window.innerWidth) * 2 - 1
      const curY = -(e.clientY / window.innerHeight) * 2 + 1

      mouseVelocityX = curX - prevMouseX
      mouseVelocityY = curY - prevMouseY
      prevMouseX = curX
      prevMouseY = curY

      targetMouseX = curX
      targetMouseY = curY
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Responsive Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Continuous Animation Loop
    let lastScrollY = window.scrollY
    let scrollWind = 0
    let reqId
    const clock = new THREE.Clock()

    const animate = () => {
      reqId = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()
      const currentScrollY = window.scrollY
      const deltaScroll = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY

      scrollWind = THREE.MathUtils.lerp(scrollWind, deltaScroll * 0.02, 0.06)

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetMouseX * 1.1, 0.03)
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetMouseY * 0.8 - (currentScrollY * 0.0015),
        0.03
      )

      // Natural gentle breeze gust (sepoi-sepoi)
      const breezeGust = Math.sin(elapsed * 0.8) * 0.015 + 0.012
      const totalWindX = breezeGust + (mouseVelocityX * 0.7) + (scrollWind * 0.03)

      mouseVelocityX *= 0.93
      mouseVelocityY *= 0.93

      // Animate Falling Leaves & Petals
      for (let k = 0; k < leafObjects.length; k++) {
        const leaf = leafObjects[k]

        leaf.baseY -= leaf.fallSpeed + (scrollWind * 0.03)
        leaf.baseX += totalWindX

        if (leaf.baseY < -14) {
          leaf.baseY = 14
          leaf.baseX = (Math.random() - 0.5) * 32
        }
        if (leaf.baseX > 19) leaf.baseX = -19
        if (leaf.baseX < -19) leaf.baseX = 19

        const sway = Math.sin(elapsed * leaf.swayFreq + leaf.phase) * leaf.swayAmp
        const flutter = Math.cos(elapsed * leaf.swayFreq * 1.4 + leaf.phase) * (leaf.swayAmp * 0.35)

        leaf.mesh.position.x = leaf.baseX + sway
        leaf.mesh.position.y = leaf.baseY + flutter
        leaf.mesh.position.z = leaf.baseZ

        leaf.mesh.rotation.x += leaf.rotSpeedX + (sway * 0.01)
        leaf.mesh.rotation.y += leaf.rotSpeedY + (totalWindX * 0.6)
        leaf.mesh.rotation.z += leaf.rotSpeedZ + (flutter * 0.01)
      }

      // Animate Wind Trails (Angin Sepoi-sepoi Melayang Horisontal)
      for (let w = 0; w < windStreaks.length; w++) {
        const streak = windStreaks[w]
        streak.line.position.x += streak.speed + totalWindX * 0.8
        streak.line.position.y = streak.baseY + Math.sin(elapsed * streak.freq + streak.phase) * 0.4

        if (streak.line.position.x > 22) {
          streak.line.position.x = -24
          streak.line.position.y = (Math.random() - 0.5) * 24
          streak.baseY = streak.line.position.y
        }
      }

      // Rotate spores
      spores.rotation.y = elapsed * 0.014
      spores.rotation.x = elapsed * 0.007

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
      leafGeometry.dispose()
      petalGeometry.dispose()
      sporeGeo.dispose()
      sporeMat.dispose()
      windStreaks.forEach((s) => {
        s.geo.dispose()
        s.line.material.dispose()
      })
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

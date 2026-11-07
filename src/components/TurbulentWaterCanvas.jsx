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
    camera.position.set(0, 0, 18)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)

    // Lighting for crisp crystal/shard reflections
    const ambientLight = new THREE.AmbientLight(0x0a1c3d, 1.5)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0x00d2ff, 3.0)
    dirLight1.position.set(5, 10, 7)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0xff184c, 2.0)
    dirLight2.position.set(-8, -5, 5)
    scene.add(dirLight2)

    // Palette authentic to Persona 3 Reload floating shards (Image #7)
    const shardColors = [
      0xff184c, // SEES Crimson
      0xff184c,
      0xffcc00, // Stat Gold / Yellow
      0x00d2ff, // Electric Cyan
      0x00d2ff,
      0xffffff, // Glass White
      0x0048d0, // Royal Blue
    ]

    // Create 3D floating geometric shards (Tetrahedrons, flat triangles, octahedrons)
    const shards = []
    const shardCount = 45

    const geometries = [
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.ConeGeometry(0.45, 0.9, 3), // Flat sharp triangular shard
      new THREE.CylinderGeometry(0, 0.45, 0.8, 3),
    ]

    for (let i = 0; i < shardCount; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)]
      const color = shardColors[Math.floor(Math.random() * shardColors.length)]

      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.15,
        metalness: 0.6,
        transparent: true,
        opacity: Math.random() * 0.45 + 0.5,
        flatShading: true,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geo, mat)

      // Distribute across screen depth
      const x = (Math.random() - 0.5) * 22
      const y = (Math.random() - 0.5) * 16
      const z = (Math.random() - 0.5) * 10

      mesh.position.set(x, y, z)

      const scale = Math.random() * 0.7 + 0.45
      mesh.scale.set(scale, scale, scale)

      // Random starting rotation
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )

      shards.push({
        mesh,
        baseX: x,
        baseY: y,
        baseZ: z,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        rotSpeedZ: (Math.random() - 0.5) * 0.012,
        floatSpeed: Math.random() * 0.8 + 0.6,
        floatOffset: Math.random() * Math.PI * 2,
        driftSpeedX: (Math.random() - 0.5) * 0.005,
      })

      scene.add(mesh)
    }

    // Add tiny luminous aquatic dust particles (bubbles / ocean sparkles)
    const particleCount = 180
    const particleGeo = new THREE.BufferGeometry()
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i + 0] = (Math.random() - 0.5) * 26
      posArray[i + 1] = (Math.random() - 0.5) * 20
      posArray[i + 2] = (Math.random() - 0.5) * 12
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse tracking
    let targetMouseX = 0
    let targetMouseY = 0
    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Scroll tracking
    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    let reqId
    const clock = new THREE.Clock()

    const animate = () => {
      reqId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()
      const currentScrollY = window.scrollY
      const deltaScroll = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY

      scrollVelocity = THREE.MathUtils.lerp(
        scrollVelocity,
        deltaScroll * 0.02,
        0.08
      )

      // Smooth camera sway with mouse and scroll
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetMouseX * 1.5, 0.04)
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetMouseY * 1.2 - (currentScrollY * 0.002),
        0.04
      )

      // Animate each floating shard
      for (let i = 0; i < shards.length; i++) {
        const s = shards[i]

        // Rotation
        s.mesh.rotation.x += s.rotSpeedX * (1 + scrollVelocity * 2)
        s.mesh.rotation.y += s.rotSpeedY * (1 + scrollVelocity * 2)
        s.mesh.rotation.z += s.rotSpeedZ

        // Gentle floating harmonic wave
        const floatY = Math.sin(elapsedTime * s.floatSpeed + s.floatOffset) * 0.6
        const floatX = Math.cos(elapsedTime * 0.5 + s.floatOffset) * 0.35

        // Drift slowly upwards and wrap around like floating underwater
        s.baseY += 0.003 * s.floatSpeed + (scrollVelocity * 0.03)
        if (s.baseY > 10) s.baseY = -10

        s.mesh.position.y = s.baseY + floatY
        s.mesh.position.x = s.baseX + floatX
      }

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.02
      particles.rotation.x = elapsedTime * 0.015

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
      geometries.forEach((g) => g.dispose())
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

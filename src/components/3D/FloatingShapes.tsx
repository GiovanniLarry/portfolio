import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const FloatingShapes = () => {
  const shapes = [
    { position: [-3, 2, 0], rotation: [0, 0, 0], color: '#6366f1' },
    { position: [3, -1, 0], rotation: [0, 0, 0], color: '#8b5cf6' },
    { position: [0, 3, -2], rotation: [0, 0, 0], color: '#ec4899' },
    { position: [-2, -2, 1], rotation: [0, 0, 0], color: '#00f5ff' },
    { position: [2, 1, -1], rotation: [0, 0, 0], color: '#6366f1' },
  ]

  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  )
}

const FloatingShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

export default FloatingShapes


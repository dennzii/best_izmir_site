import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function TimelineBar() {
  return (
    <mesh position={[0, 0, 0]}>
      
      <boxGeometry args={[5, 0.2, 0.2]} />
      <meshStandardMaterial color="blue" />

      
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[-2 + i, 0.5, 0]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <TimelineBar />
      <OrbitControls />
    </Canvas>
  );
}

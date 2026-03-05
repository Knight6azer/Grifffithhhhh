import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Icosahedron() {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        meshRef.current.rotation.x = t * 0.15;
        meshRef.current.rotation.y = t * 0.22;
    });
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh ref={meshRef} position={[3.5, 0.8, -2]}>
                <icosahedronGeometry args={[1.4, 1]} />
                <meshStandardMaterial
                    color="#64ffda"
                    emissive="#64ffda"
                    emissiveIntensity={0.2}
                    wireframe
                    transparent
                    opacity={0.55}
                />
            </mesh>
        </Float>
    );
}

function TorusKnot() {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        meshRef.current.rotation.x = t * 0.1;
        meshRef.current.rotation.z = t * 0.18;
    });
    return (
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={1.2}>
            <mesh ref={meshRef} position={[-4, -1, -3]}>
                <torusKnotGeometry args={[0.9, 0.28, 80, 16]} />
                <meshStandardMaterial
                    color="#00b4d8"
                    emissive="#00b4d8"
                    emissiveIntensity={0.3}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </Float>
    );
}

function Ring() {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.5;
        meshRef.current.rotation.y = t * 0.12;
    });
    return (
        <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.6}>
            <mesh ref={meshRef} position={[0.5, 2.5, -4]}>
                <torusGeometry args={[1.2, 0.06, 16, 80]} />
                <meshStandardMaterial
                    color="#64ffda"
                    emissive="#64ffda"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.5}
                />
            </mesh>
        </Float>
    );
}

export function FloatingGeometry() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.8} color="#64ffda" />
            <pointLight position={[-5, -5, 2]} intensity={0.6} color="#00b4d8" />
            <Icosahedron />
            <TorusKnot />
            <Ring />
        </>
    );
}

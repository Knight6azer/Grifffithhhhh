import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";

const allSkills = [
    "Python", "Machine Learning", "NumPy", "Pandas",
    "Arduino", "IoT", "C++", "SQL",
    "Matplotlib", "JavaScript", "React", "Embedded",
    "NLP", "Data Science", "Raspberry Pi", "TensorFlow",
];

function SkillLabel({ position, label }: { position: [number, number, number]; label: string }) {
    return (
        <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
            <Html position={position} center distanceFactor={6}>
                <div
                    style={{
                        background: "rgba(100,255,218,0.08)",
                        border: "1px solid rgba(100,255,218,0.3)",
                        color: "#64ffda",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontFamily: "JetBrains Mono, monospace",
                        whiteSpace: "nowrap",
                        backdropFilter: "blur(8px)",
                        cursor: "default",
                        transition: "all 0.3s",
                        userSelect: "none",
                    }}
                >
                    {label}
                </div>
            </Html>
        </Float>
    );
}

function OrbitingSphere() {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    });
    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.6, 32, 32]} />
            <meshStandardMaterial
                color="#0a192f"
                emissive="#112240"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
                wireframe={false}
            />
        </mesh>
    );
}

function WireframeSphere() {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    });
    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.65, 16, 16]} />
            <meshStandardMaterial
                color="#64ffda"
                emissive="#64ffda"
                emissiveIntensity={0.1}
                wireframe
                transparent
                opacity={0.25}
            />
        </mesh>
    );
}

export function SkillsGlobe() {
    const labelPositions = useMemo(() => {
        return allSkills.map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / allSkills.length);
            const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
            const r = 2.7;
            return [
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.cos(phi),
                r * Math.sin(phi) * Math.sin(theta),
            ] as [number, number, number];
        });
    }, []);

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#64ffda" />
            <pointLight position={[-5, -5, 2]} intensity={0.5} color="#00b4d8" />
            <OrbitingSphere />
            <WireframeSphere />
            {allSkills.map((skill, i) => (
                <SkillLabel key={skill} position={labelPositions[i]} label={skill} />
            ))}
        </group>
    );
}

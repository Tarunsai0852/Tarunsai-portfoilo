import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 180;

const CinematicLayer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const basePositions: Array<{ x: number; y: number; z: number; phase: number; speed: number }> = [];
    const warm = new THREE.Color('#ff9f43');
    const soft = new THREE.Color('#fff2d6');

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const x = (Math.random() - 0.5) * 34;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 14;
      const phase = Math.random() * Math.PI * 2;
      const speed = 0.22 + Math.random() * 0.38;
      const color = warm.clone().lerp(soft, Math.random() * 0.65);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      basePositions.push({ x, y, z, phase, speed });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;

      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const base = basePositions[i];
        positionAttribute.setXYZ(
          i,
          base.x + Math.sin(elapsed * base.speed + base.phase) * 0.18,
          base.y + Math.cos(elapsed * base.speed * 0.8 + base.phase) * 0.22,
          base.z + Math.sin(elapsed * base.speed * 0.5 + base.phase) * 0.14,
        );
      }

      positionAttribute.needsUpdate = true;
      particles.rotation.y = elapsed * 0.015;
      particles.rotation.x = Math.sin(elapsed * 0.12) * 0.025;
      camera.position.x += (mouseRef.current.x * 1.4 - camera.position.x) * 0.035;
      camera.position.y += (-mouseRef.current.y * 0.9 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 z-10" aria-hidden="true" />;
};

export default CinematicLayer;

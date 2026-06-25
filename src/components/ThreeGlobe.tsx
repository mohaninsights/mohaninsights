import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Particle Dot-Matrix Globe
    const globeGeometry = new THREE.SphereGeometry(4.5, 36, 36);
    
    // Create points material with custom size and glowing color
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00f2ff,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const globePoints = new THREE.Points(globeGeometry, pointsMaterial);
    globeGroup.add(globePoints);

    // 2. Wireframe Inner Core
    const coreGeometry = new THREE.SphereGeometry(4.4, 16, 16);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    globeGroup.add(coreMesh);

    // 3. Orbital Tech Rings (SEO & SMO connections)
    const ringGroup = new THREE.Group();
    globeGroup.add(ringGroup);

    const ringCount = 3;
    const rings: THREE.Line[] = [];

    for (let i = 0; i < ringCount; i++) {
      const ringGeom = new THREE.RingGeometry(5.2 + i * 0.4, 5.22 + i * 0.4, 64);
      // Rotate geometry to make a flat circle
      ringGeom.rotateX(Math.PI / 2);
      
      const ringMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x0066ff : 0x00f2ff,
        transparent: true,
        opacity: 0.3 - i * 0.08,
        blending: THREE.AdditiveBlending,
      });

      const ringMesh = new THREE.Line(ringGeom, ringMat);
      // Random tilt
      ringMesh.rotation.x = Math.random() * Math.PI;
      ringMesh.rotation.y = Math.random() * Math.PI;
      
      ringGroup.add(ringMesh);
      rings.push(ringMesh);
    }

    // 4. Floating Atmospheric Particles (Nodes of the web)
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random position on a sphere shell of radius 6 - 8
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.5 + Math.random() * 2.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation (Cyan to Blue)
      const isCyan = Math.random() > 0.5;
      colors[i * 3] = isCyan ? 0.0 : 0.0; // R
      colors[i * 3 + 1] = isCyan ? 0.95 : 0.4; // G
      colors[i * 3 + 2] = isCyan ? 1.0 : 1.0; // B
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particlesMaterial);
    globeGroup.add(particleSystem);

    // Interactive Variables
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    // Mouse Parallax (Passive interaction)
    const handleMouseMove = (event: MouseEvent) => {
      // Normal mouse move parallax when not dragging
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
        
        targetRotationY = mouseX * 0.5;
        targetRotationX = -mouseY * 0.5;
      }
    };

    // Drag to rotate globe
    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseDrag = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      // Adjust rotation speed
      globeGroup.rotation.y += deltaMove.x * 0.005;
      globeGroup.rotation.x += deltaMove.y * 0.005;

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Mobile touch controls
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        isDragging = true;
        previousMousePosition = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging || event.touches.length !== 1) return;

      const deltaMove = {
        x: event.touches[0].clientX - previousMousePosition.x,
        y: event.touches[0].clientY - previousMousePosition.y,
      };

      globeGroup.rotation.y += deltaMove.x * 0.008;
      globeGroup.rotation.x += deltaMove.y * 0.008;

      previousMousePosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    };

    // Attach listeners to container
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseDrag);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Touch support
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleMouseUp);

    // Resize Observer to match container resizing dynamically (as per guidelines)
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = entry.contentRect.width || container.clientWidth;
        height = entry.contentRect.height || container.clientHeight || 400;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous slow automatic rotation
      if (!isDragging) {
        globeGroup.rotation.y += 0.002;
        
        // Return smoothly to mouse position
        globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y % (Math.PI * 2)) * 0.05;
        globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x % (Math.PI * 2)) * 0.05;
      }

      // Rotate individual outer rings
      rings.forEach((ring, index) => {
        ring.rotation.z += 0.003 * (index % 2 === 0 ? 1 : -1);
      });

      // Atmospheric particles pulsing
      const positionAttr = particleSystem.geometry.attributes.position as THREE.BufferAttribute;
      const array = positionAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Subtle ripple / breathing animation
        const index = i * 3;
        const x = array[index];
        const y = array[index + 1];
        const z = array[index + 2];
        
        const dist = Math.sqrt(x*x + y*y + z*z);
        const scale = 1 + Math.sin(elapsedTime * 2 + i) * 0.0005;
        
        array[index] = x * scale;
        array[index + 1] = y * scale;
        array[index + 2] = z * scale;
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseDrag);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleMouseUp);

      globeGeometry.dispose();
      pointsMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particlesMaterial.dispose();
      particleGeometry.dispose();
      rings.forEach((r) => {
        r.geometry.dispose();
        if (Array.isArray(r.material)) {
          r.material.forEach((m) => m.dispose());
        } else {
          r.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="3d-globe-container"
      className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* 3D UI Overlay Hint */}
      <div 
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-wider glass-panel border border-white/5 transition-opacity duration-500 flex items-center gap-2 text-cyan-400 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-40"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        DRAG TO ROTATE GLOBE • MOUSE PARALLAX
      </div>
    </div>
  );
}

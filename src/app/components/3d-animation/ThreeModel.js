// ThreeModel.js
"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeModel = () => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const requestRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const accentLight = new THREE.PointLight(0xff7e33, 5, 20);
    accentLight.position.set(0, 5, 5);
    scene.add(accentLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      '/models/house.glb', // Opdater med din modelsti
      (gltf) => {
        modelRef.current = gltf.scene;
        modelRef.current.scale.set(1, 1, 1);
        modelRef.current.position.y = -1;
        
        // Enable shadows for all meshes in model
        modelRef.current.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(modelRef.current);

        // Handle animations if present
        if (gltf.animations?.length) {
          mixerRef.current = new THREE.AnimationMixer(modelRef.current);
          gltf.animations.forEach((clip) => {
            mixerRef.current.clipAction(clip).play();
          });
        }
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

    // Auto-rotation controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableDamping = true;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestRef.current);
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 right-0 w-full h-full" />;
};

export default ThreeModel;

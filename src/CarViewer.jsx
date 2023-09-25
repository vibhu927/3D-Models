import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function CarViewer() {
  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const container = document.getElementById('car-container');
    camera.position.set(7,800,1200);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    const loader = new GLTFLoader(); 
    let carModel;

    loader.load('src/assets/car.glb', (gltf) => {
      carModel = gltf.scene;
      scene.add(carModel);
    }, undefined, (error) => {
      console.error('Error loading GLB model:', error);
    });

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    scene.background = new THREE.Color(0xffffff);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    camera.position.z = 5;

    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true; // Enable auto rotation
    controls.enableZoom = false; // Enable zooming

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Update model properties if needed
      // ...

      renderer.render(scene, camera);
    }

    animate();

    // Clean up when the component unmounts
    return () => {
      // Dispose of resources
      if (carModel) {
        scene.remove(carModel);
        carModel.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
      }

      // Dispose of the OrbitControls instance
      controls.dispose();

      // Remove the renderer's DOM element
      document.getElementById('car-container').removeChild(renderer.domElement);

      // Dispose of the renderer
      renderer.dispose();
    };
  }, []);

  const styles = ({
    car:{
      width:'100%',
      height:'500px'
    }
  })
  return (
    <div id="car-container" style={{width: "100%", height: "560px",}}>
    </div>

  );
}

export default CarViewer;


import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.getElementById("scene-container").appendChild(renderer.domElement);

const spotLight = new THREE.SpotLight(0xffffff, 10, 100, Math.PI / 4, 0.1, 1); // white spotlight
spotLight.position.set(0, 10, 10);
scene.add(spotLight);

// Load GLTF model
const loader = new GLTFLoader();
loader.load(
  "/static/3d models/animal crossing character/scene.gltf", // Replace with the path to your model
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Position and scale the model as needed
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
  },
  undefined,
  (error) => {
    console.error("An error occurred loading the model:", error);
  }
);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

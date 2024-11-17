import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";

let model; // Declare a variable to store the model

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / (window.innerHeight / 2),
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight / 2);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop(animate);
document.getElementById("scene-container").appendChild(renderer.domElement);

const spotLight = new THREE.SpotLight(0xffffff, 5, 100, Math.PI / 4, 0.1, 0.4); // white spotlight
spotLight.position.set(0, 10, 5);
scene.add(spotLight);

// Load GLTF model
const loader = new GLTFLoader();
let character;
loader.load(
  "/static/3d models/animal crossing character/scene.gltf", // Replace with the path to your model
  (gltf) => {
    model = gltf.scene;
    scene.add(model);

    // Position and scale the model as needed
    model.position.set(0, -2, 0);
    model.scale.set(1.5, 1.5, 1.5);
  },
  undefined,
  (error) => {
    console.error("An error occurred loading the model:", error);
  }
);

camera.position.x = 0;
camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(0, 0, 0);

// Animation loop
function animate() {
  // Rotate the model if it's loaded
  if (model) {
    model.rotation.y += 0.01; // Rotate around the y-axis
  }

  renderer.render(scene, camera);
}

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight / 2);
  renderer.setPixelRatio(window.devicePixelRatio);

  camera.aspect = window.innerWidth / (window.innerHeight / 2);
  camera.updateProjectionMatrix();
}

function initMain() {
  if (WebGL.isWebGLAvailable()) {
    window.addEventListener("resize", () => resize());
    animate();
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("view").appendChild(warning);
  }
}

initMain();

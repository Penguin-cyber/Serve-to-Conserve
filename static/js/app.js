import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";

let model;
let villager = 3

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / (window.innerHeight / 2.5),
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight / 2.5);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop(animate);
document.getElementById("scene-container").appendChild(renderer.domElement);

const spotLight = new THREE.SpotLight(0xffffff, 15, 100, Math.PI / 4, 0.1, 0.4); // white spotlight
spotLight.position.set(0, 10, 5);

const pointLight = new THREE.PointLight(0xffffff, 10, 0, 1);
pointLight.position.set(0, 0, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

scene.add(spotLight);
scene.add(pointLight);
scene.add(ambientLight);

// Load GLTF model
const loader = new GLTFLoader();

loader.load(
  "/static/3d models/animal crossing character/villager" + villager +  ".glb", // Replace with the path to your model
  (gltf) => {
    model = gltf.scene;
    scene.add(model);

    // Position and scale the model as needed
    model.position.set(-0.3, -2, 0);
    model.scale.set(5, 5, 5);

    model.children[2].children[0].material.color = new THREE.Color(
      1,
      0.764,
      0.6212
    );
    console.log(model.children[2].children[0].material);
  },
  undefined,
  (error) => {
    console.error("An error occurred loading the model:", error);
  }
);

camera.position.x = 0;
camera.position.y = 2.5;
camera.position.z = 5;
camera.lookAt(0, 1.5, 0);

// Animation loop
function animate() {
  // Rotate the model if it's loaded
  if (model) {
    model.rotation.y += 0.01; // Rotate around the y-axis
  }

  renderer.render(scene, camera);
}

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight / 2.5);
  renderer.setPixelRatio(window.devicePixelRatio);

  camera.aspect = window.innerWidth / (window.innerHeight / 2.5);
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

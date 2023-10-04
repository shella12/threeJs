// Scene
const scene = new THREE.Scene();

// Cube

const shape = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(shape, material);
scene.add(mesh);

//Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 6;
camera.position.x = 3;
camera.position.y = 1;
scene.add(camera);

//Renderer

const canvas = document.querySelector('.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

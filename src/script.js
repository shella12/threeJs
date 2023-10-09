
import * as THREE from 'three';
// Scene
const scene = new THREE.Scene();
const axis = new THREE.AxesHelper( 5 );
scene.add(axis);
// Cube

// const shape = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({color: 0xff0000});
// const mesh = new THREE.Mesh(shape, material);
// mesh.position.set(1,1,1);
// scene.add(mesh);

//Camera
const sizes = {
    width: 800,
    height: 600
}



const group = new THREE.Group();
const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0x00FF00})); 
cube1.position.set(1,1,1);
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0xFF0000})); 
cube2.position.set(2,2,1);
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0x0000FF})); 
cube3.position.set(3,3,1);
group.add(cube1);
group.add(cube2);
group.add(cube3);
scene.add(group);
// group.position.y = 2;
group.rotation.reorder('YXZ');
group.rotation.set(1,1,1);
// group.position.normalize();
//Renderer
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 6;
camera.position.x = 3;
camera.position.y = 1;
camera.lookAt(group.position);
scene.add(camera);
const canvas = document.querySelector('.webgl');
// console.log(canvas);
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Scene, Object/Model, Camera, Renderer

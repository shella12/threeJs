
import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import gsap from 'gsap';
// Scene
const scene = new THREE.Scene();
const axis = new THREE.AxesHelper( 5 );
scene.add(axis);

const cursor = {
    x:0,
    y:0
}
// window.addEventListener('mousemove', (event)=> {
//   cursor.x = event.clientX / sizes.width - 0.5;
//   cursor.y = -(event.clientY / sizes.height - 0.5);
// })

window.addEventListener('resize', (event) => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width/ sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height)
    renderer.pixelRatio(Math.min(window.devicePixelRatio),2);
})

window.addEventListener('dblclick', (event) => {
    const fullscreenElement  = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement){
        if(canvas.requestFullscreen) {
            canvas.requestFullscreen();
        }
        else if(canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        }
    }
    else {
        if(document.exitFullscreen) {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }
})
// Cube

// const shape = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({color: 0xff0000});
// const mesh = new THREE.Mesh(shape, material);
// mesh.position.set(1,1,1);
// scene.add(mesh);

//Camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



const group = new THREE.Group();
const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0x00FF00})); 
cube1.position.set(1,1,1);
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0xFF0000})); 
cube2.position.set(2,2,1);
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({color: 0x0000FF})); 
cube3.position.set(3,3,1);
group.add(cube1);
// group.add(cube2);
// group.add(cube3);
scene.add(group);
// group.position.y = 2;
group.rotation.reorder('YXZ');
group.rotation.set(1,1,1);
// group.position.normalize();
//Renderer

// OrthographicCamera
// const aspecRatio = sizes.width/sizes.height;
// const a = 2;
// const camera = new THREE.OrthographicCamera(-a*aspecRatio,a*aspecRatio,a,-a,0.1,200);
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 6;
// camera.position.x = 3;
// camera.position.y = 1;
camera.lookAt(group.position);
scene.add(camera);


// OrbitControls

const canvas = document.querySelector('.webgl');
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// console.log(canvas);
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);

// Scene, Object/Model, Camera, Renderer
//Animation
// To solve frame per second problem of devices use time
// One way to do this is using Date.now() difference see steps (1), (2) and (3): 
// 1. let time = Date.now();

// other way of doinf it is by using THREE.Clock() see steps (I) and (II)

// I. 
// const clock= new THREE.Clock(); 

// We can also use libraries for animation like gsap. Gsap has its own so
//  requestAnimationFrame so we don't need to specify it in the tick 

// gsap.to(cube1.position, {duration:1, delay:1, x:2})
// gsap.to(cube1.position, {duration:1, delay:2, x:0})
// gsap.to(cube1.position, {duration:1, delay:3, x:1})
// gsap.to(cube2.rotation, {duration:1, delay:1, z:2})
// gsap.to(cube2.scale, {duration:1, delay:2, z:2})
// gsap.to(cube1.rotation, {duration:1, delay:3, y:1})

const tick = () => {
    // 2. Difference
    // const currentTime = Date.now();
    // const deltaTime = currentTime - time;
    // time = currentTime;
    // 3. group.position.x += deltaTime * 0.001;
    //    group.rotation.y += deltaTime * 0.001;

// II.
// const elapsedTime = clock.getElapsedTime();
// cube1.position.x = Math.cos(elapsedTime);
// cube2.rotation.y = Math.sin(elapsedTime);
// cube3.scale.y = Math.tan(elapsedTime);
// camera.lookAt(cube1.position);
 
// Add camera movement
// camera.position.x = cursor.x * 10;
// camera.position.y = cursor.y * 10;
// camera.lookAt(group.position)
controls.update();

 renderer.render(scene, camera);
 window.requestAnimationFrame(tick);
}

tick();
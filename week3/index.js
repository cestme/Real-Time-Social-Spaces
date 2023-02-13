
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, renderer;
let dot;
let floorMesh, floorMesh2, cube, cubeS;
let frameCount=0;

function init(){
scene = new THREE.Scene();

let aspect = window.innerWidth / window.innerHeight;
camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.z = 15; 
camera.position.y = 2;

camera.lookAt(0, 0, 0);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

let controls = new OrbitControls(camera, renderer.domElement);
}
init();

//cube1
const geoCube1 = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
const matCube1 = new THREE.MeshDepthMaterial( {color: "white"} );
const cube1 = new THREE.Mesh( geoCube1, matCube1 );
scene.add( cube1 );

// make a group
const groupc = new THREE.Group();
groupc.add(cube1);
groupc.add(camera);
scene.add(groupc);

//plant1
let bcolor = new THREE.Color("#CCC9E7");
const geoCube = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const matCube = new THREE.MeshNormalMaterial( {color: bcolor} );
cube = new THREE.Mesh( geoCube, matCube );
cube.position.set(5,0,0);
cube.castShadow = true;
scene.add( cube );


let cgreen = new THREE.Color("#058C42");

let geometry = new THREE.ConeGeometry(1, 5, 32 );
let material = new THREE.MeshNormalMaterial({ color: cgreen });
let my3DObject = new THREE.Mesh(geometry, material);
my3DObject.position.set(0,2,0);
my3DObject.castShadow = true;

let geo2 = new THREE.ConeGeometry(1, 5, 32 );
let mat2 = new THREE.MeshNormalMaterial({ color: cgreen });
let my3DObject2 = new THREE.Mesh(geo2, mat2);
my3DObject2.position.set(0.5,2,0);
my3DObject2.rotateZ(-Math.PI/12);
my3DObject2.castShadow = true;

let geo3 = new THREE.ConeGeometry(1, 5, 32 );
let mat3 = new THREE.MeshNormalMaterial({ color: cgreen });
let my3DObject3 = new THREE.Mesh(geo3, mat3);
my3DObject3.position.set(-0.5,2,0);
my3DObject3.rotateZ(Math.PI/16);
my3DObject3.rotateY(-Math.PI/8);
my3DObject3.castShadow = true;


// floor
// let floorGeo = new THREE.BoxGeometry(20, 0.5, 20);
// let floorMat = new THREE.MeshPhongMaterial({ color: "white" });
// let floorMesh = new THREE.Mesh(floorGeo, floorMat);
// floorMesh.position.set(0, -5, 0);
// floorMesh.receiveShadow = true;
//scene.add(floorMesh);


//floor
let floorGeo = new THREE.BoxGeometry(5, 0.1, 5);
let floorMat = new THREE.MeshPhongMaterial({ color: "white" });
floorMesh = new THREE.Mesh(floorGeo, floorMat);
//floorMesh.position.set(-5, -3, 0);
floorMesh.receiveShadow = true;
scene.add(floorMesh);

let floorGeo2 = new THREE.BoxGeometry(5, 0.1, 5);
let floorMat2 = new THREE.MeshPhongMaterial({ color: "white" });
floorMesh2 = new THREE.Mesh(floorGeo2, floorMat2);
floorMesh2.position.set(5, -3, 0);
floorMesh2.receiveShadow = true;
scene.add(floorMesh2);

//plant2
let geoCubeS = new THREE.BoxGeometry(2.5,2.5,2.5);
let matCubeS = new THREE.MeshPhysicalMaterial( {color: "white"} );
cubeS = new THREE.Mesh( geoCubeS, matCubeS );
cubeS.position.set(-5, 0,0);
cubeS.castShadow = true;
scene.add(cubeS);

let sgeometry = new THREE.ConeGeometry(1, 5, 32 );
let smaterial = new THREE.MeshPhysicalMaterial({ color: cgreen });
let smy3DObject = new THREE.Mesh(sgeometry, smaterial);
smy3DObject.position.set(0,2,0);
smy3DObject.castShadow = true;

let sgeo2 = new THREE.ConeGeometry(1, 5, 32 );
let smat2 = new THREE.MeshPhysicalMaterial({ color: cgreen });
let smy3DObject2 = new THREE.Mesh(sgeo2, smat2);
smy3DObject2.position.set(0.5,2,0);
smy3DObject2.rotateZ(-Math.PI/12);
smy3DObject2.castShadow = true;

let sgeo3 = new THREE.ConeGeometry(1, 5, 32 );
let smat3 = new THREE.MeshPhysicalMaterial({ color: cgreen });
let smy3DObject3 = new THREE.Mesh(sgeo3, smat3);
smy3DObject3.position.set(-0.5,2,0);
smy3DObject3.rotateZ(Math.PI/16);
smy3DObject3.rotateY(-Math.PI/8);
smy3DObject3.castShadow = true;



// and add it to the scene
cube.add(my3DObject);
cube.add(my3DObject2);
cube.add(my3DObject3);
cubeS.add(smy3DObject);
cubeS.add(smy3DObject2);
cubeS.add(smy3DObject3);


let g = new THREE.BoxGeometry( 0.05, 0.05, 0.05 );
let m = new THREE.MeshLambertMaterial({ color: "white" });
let my3D = new THREE.Mesh(g, m);


for ( let i = 0; i < 100; i+= 2 ){
    for ( let j = -50; j < 100; j+= 2 ){
        for ( let d = -10; d < 10; d+= 2 ){
    my3D =new THREE.Mesh( g, m );
    my3D.position.x = i;
    my3D.position.y = j;
    my3D.position.z = d;
    
    scene.add( my3D );
 }
}
    }


let g1 = new THREE.BoxGeometry( 0.05, 0.05, 0.05 );
let m1 = new THREE.MeshNormalMaterial({ color: "white" });
let my3D1 = new THREE.Mesh(g1, m1);

for ( let i = 0; i > -100; i-= 2 ){
    for ( let j = -50; j < 100; j+= 2 ){
        for ( let d = -10; d < 10; d+= 2 ){
    my3D1 =new THREE.Mesh( g1, m1 );
    my3D1.position.x = i;
    my3D1.position.y = j;
    my3D1.position.z = d;
    
    scene.add( my3D1 );
 }
}
    }

//add a light
let myColor = new THREE.Color("#FCD0A1");
let ambientLight = new THREE.AmbientLight(myColor, 0.5);
scene.add(ambientLight);

// add a directional light
let myDirectionalLight = new THREE.DirectionalLight(myColor, 0.85);
myDirectionalLight.position.set(0, 20, 0);
myDirectionalLight.lookAt(0, 0, 0);
scene.add(myDirectionalLight);
myDirectionalLight.castShadow = true;
//Set up shadow properties for the light
myDirectionalLight.shadow.mapSize.width = 512; // default
myDirectionalLight.shadow.mapSize.height = 512; // default
myDirectionalLight.shadow.camera.near = 0.5; // default
myDirectionalLight.shadow.camera.far = 500; // default

let geometry2 = new THREE.BoxGeometry(0.01, 0.01, 0.01);
let material2 = new THREE.MeshBasicMaterial({color: "red"});
dot = new THREE.Mesh(geometry2, material2);
scene.add(dot);
   dot.add(camera);


function loop() {
    frameCount++;
    floorMesh2.position.set(5, Math.sin(frameCount / 15)*1.5  -4,0 );
    floorMesh.position.set(-5, Math.sin(frameCount / 15)*1.5  -4,0);

    cube.position.set(5, -Math.sin(frameCount / 15)*1.5,0 );
    cubeS.position.set(-5, -Math.sin(frameCount / 15)*1.5,0);

  cube.rotateY(0.01);
  cubeS.rotateY(-0.01);
  dot.rotateY(-0.005);
  // finally, take a picture of the scene and show it in the <canvas>
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop); // pass the name of your loop function into this function
}
loop();



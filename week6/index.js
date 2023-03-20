import * as THREE from "three";
import { DragControls } from 'three/addons/controls/DragControls.js';
//import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


//let container;
let camera, scene, renderer;
let controls, group;
let seed;
let count = 0;
count++;
let enableSelection = false;
const mouse = new THREE.Vector2(), raycaster = new THREE.Raycaster();

const objects = [];

function init() {
  // create a scene in which all other objects will exist
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#F4FFFD");

  // create a camera and position it in space
  let aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
  camera.position.z = 7; // place the camera in space
  camera.position.y = 3;
  camera.lookAt(0, 3, 0);

  // the renderer will actually show the camera view within our <canvas>
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);


  const geometry = new THREE.CapsuleGeometry( 0.08,0.08, 32, 64 );
  const material = new THREE.MeshBasicMaterial( {color: "#92DCE5"} );
  seed = new THREE.Mesh( geometry, material );
  seed.position.y = 5;
  //seed.scale.set(0.08,0.08,0.1);
  seed.rotateZ(Math.PI/4);
  scene.add( seed );
  objects.push(seed);


  // add orbit controls
  //let controls = new OrbitControls(camera, renderer.domElement);

  // add some lights so we can see our model
  scene.add(new THREE.AmbientLight("#F2E8CF", 0.5));
  scene.add(new THREE.DirectionalLight("#F2E8CF", 0.75));



    controls = new DragControls( [ ... objects ], camera, renderer.domElement );
    controls.addEventListener( 'drag', loop );

			
	document.addEventListener( 'click', onClick );
				
  // add our model
  loadModel();
  

  loop();
}

function onClick( event ) {

    event.preventDefault();

    if ( enableSelection === true ) {

        const draggableObjects = controls.getObjects();
        draggableObjects.length = 0;

        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera );

        const intersections = raycaster.intersectObjects( objects, true );

        if ( intersections.length > 0 ) {

            const object = intersections[ 0 ].object;

            if ( group.children.includes( object ) === true ) {

                object.material.emissive.set( 0x000000 );
                scene.attach( object );

            } else {

                object.material.emissive.set( 0xaaaaaa );
                group.attach( object );

            }

            controls.transformGroup = true;
            draggableObjects.push( group );

        }

        if ( group.children.length === 0 ) {

            controls.transformGroup = false;
            draggableObjects.push( ...objects );
            
        }
    }
    if (event.clientY>633 && event.clientY<764 &&event.clientX>620 && event.clientX < 780){
        loadModel3();
        }
    console.log(event.clientY+"y");
    console.log(event.clientX+"x");
}
function loadModel() {
  // first create a loader
  let loader = new GLTFLoader();

  // then load the file and add it to your scene
  loader.load("./flower_pot2.glb", function (gltf) {
   scene.add(gltf.scene);
   objects.push(gltf.scene);
   
  });
}

function loadModel2() {
   let loader = new GLTFLoader();

 
  loader.load("./alien_flower.glb", function (gltf) {
   scene.add(gltf.scene);
   gltf.scene.rotateX(Math.PI/2);
   gltf.scene.position.y = 3;
   gltf.scene.scale.set(0.3,0.3,0.3);
  });
  }

  function loadModel3(){
    for( var i = 0; i < 200; i ++ ) {
    let loader = new GLTFLoader();
    loader.load("./alien_flower.glb", function (gltf) {
        gltf.scene.position.x = Math.random() * 10 - 5;
		gltf.scene.position.y = Math.random() * 10 - 3;
		gltf.scene.position.z = (Math.random()+0.1) * 4;
        gltf.scene.scale.set(0.3,0.3,0.3);
        gltf.scene.rotateX(Math.PI/2);
        scene.add(gltf.scene);
    });
}
  }

// function cameraMove(){
//     if (camera.position.y <10);
// camera.position.y += 1;
// }

function loop() {
  // finally, take a picture of the scene and show it in the <canvas>






  renderer.render(scene, camera);
  window.requestAnimationFrame(loop); // pass the name of your loop function into this function
}

init();


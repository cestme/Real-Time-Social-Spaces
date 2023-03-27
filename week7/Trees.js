import * as THREE from "three";

export class Trees {
  // the constructor is a special function which is called when we create a new
  // 'instance' of this class
  constructor(x, y, z, scene) {
    let geo = new THREE.ConeGeometry( 3, 7, 4 );
    let mat = new THREE.MeshBasicMaterial({color: "#8CD867"});
    this.mesh1 = new THREE.Mesh(geo, mat);
    this.mesh1.position.set(x, y, z);
    scene.add(this.mesh1);

    this.mesh2 = new THREE.Mesh(geo, mat);
    this.mesh2.position.set(x, y-3, z);
    this.mesh2.scale.set(1.2, 1.2,1.2);
    scene.add(this.mesh2);

    let geo1 = new THREE.CylinderGeometry( 1, 1, 4, 5 );
    let mat1 = new THREE.MeshBasicMaterial( {color: "#582F0E"} );

    this.mesh3 = new THREE.Mesh(geo1, mat1);
    this.mesh3.position.set(x, y-9, z);
    scene.add(this.mesh3);

  }

//   update() {
//     this.frameCount++;

//     this.mesh.rotateX(0.01);
//     this.mesh.rotateZ(0.01);
//   }
}

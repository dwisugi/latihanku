var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
/*
1. FOV = field of view -> sudut padang kamera
2. aspect = ratio -> menyesuaikan kelayar yang kita pakai
3. near clip = ebarapa dekat yang dapat dilihat kamera
4. far clip -> seberapa jauh yang dapat dilihat kamera
*/
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var bentuk = new THREE.BoxGeometry(2,2,2);
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var kotak = new THREE.Mesh( bentuk, material);

scene.add(kotak);

camera.position.z = 5 ;

var animation = function () {
    requestAnimationFrame(animation);
    kotak.rotation.z += 0.01;
    kotak.rotation.x += 0.01;
    kotak.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animation();
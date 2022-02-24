<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 14:24:38
 * @LastEditTime: 2022-01-26 17:10:25
 * @LastEditors: Gavin
-->

<template>
  <div id="demo" />
</template>

<script lang="ts" setup>
  // import * as THREE from 'three'
  import { onMounted } from 'vue'
  // console.log(THREE);

  import * as THREE from 'three'
  import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect'
  import nx from '@/assets/img/nx.png'
  import ny from '@/assets/img/ny.png'
  import nz from '@/assets/img/nz.png'
  import px from '@/assets/img/px.png'
  import py from '@/assets/img/py.png'
  import pz from '@/assets/img/pz.png'

  let container, camera, scene, renderer, effect

  const spheres: any[] = []

  let mouseX = 0
  let mouseY = 0

  let windowHalfX
  let windowHalfY
  let domWidth, domHeight

  document.addEventListener('mousemove', onDocumentMouseMove)

  function init() {
    const demo = document.getElementById('demo')
    console.log(demo?.offsetWidth)

    container = document.createElement('div')
    demo?.appendChild(container)
    domWidth = demo?.offsetWidth
    domHeight = demo?.offsetHeight
    windowHalfX = demo?.offsetWidth! / 2
    windowHalfY = demo?.offsetHeight! / 2
    camera = new THREE.PerspectiveCamera(60, domWidth / domHeight, 0.01, 100)
    camera.position.z = 3
    camera.focalLength = 3

    const path = 'textures/cube/pisa/'
    const format = '.png'
    const urls = [px, nx, py, ny, pz, nz]

    const textureCube = new THREE.CubeTextureLoader().load(urls)

    scene = new THREE.Scene()
    scene.background = textureCube

    const geometry = new THREE.SphereGeometry(0.1, 32, 16)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: textureCube,
    })

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material)

      mesh.position.x = Math.random() * 10 - 5
      mesh.position.y = Math.random() * 10 - 5
      mesh.position.z = Math.random() * 10 - 5

      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1

      scene.add(mesh)

      spheres.push(mesh)
    }

    //

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const width = demo?.offsetWidth || 2
    const height = domHeight || 2

    effect = new AnaglyphEffect(renderer)
    effect.setSize(width, height)

    //

    window.addEventListener('resize', onWindowResize)
  }

  function onWindowResize() {
    // windowHalfX = domWidth / 2;
    // windowHalfY = domHeight / 2;

    camera.aspect = domWidth / domHeight
    camera.updateProjectionMatrix()

    effect.setSize(domWidth, domHeight)
  }

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 100
    mouseY = (event.clientY - windowHalfY) / 100
  }

  //

  function animate() {
    requestAnimationFrame(animate)

    render()
  }

  function render() {
    const timer = 0.0001 * Date.now()

    camera.position.x += (mouseX - camera.position.x) * 0.05
    camera.position.y += (-mouseY - camera.position.y) * 0.05

    camera.lookAt(scene.position)

    for (let i = 0, il = spheres.length; i < il; i++) {
      const sphere = spheres[i]

      sphere.position.x = 5 * Math.cos(timer + i)
      sphere.position.y = 5 * Math.sin(timer + i * 1.1)
    }

    effect.render(scene, camera)
  }

  onMounted(() => {
    init()
    animate()
  })

  //expects props options
  /*const props = defineProps({
foo: String
})*/
  //expects emits options
  //const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang="scss">
  #demo {
    width: 100%;
    height: 100%;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>

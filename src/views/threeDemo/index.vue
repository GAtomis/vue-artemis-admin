<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 14:24:38
 * @LastEditTime: 2022-01-24 17:12:41
 * @LastEditors: Gavin
-->

<template>
 <div id="GUI">

 </div>
</template>

<script lang='ts' setup>

// import  THREE from 'three'
// console.error(THREE);


const initThree=()=>{
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
const GUI:HTMLElement | null=document.getElementById('GUI')
GUI?.appendChild( renderer.domElement );
}
initThree()
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>
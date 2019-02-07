<template>

  <a-scene embedded arjs>
    <a-assets>
    <a-asset-item id="windturbine" src="/assets/windturbine.gltf"></a-asset-item>
  </a-assets>
  	<a-marker preset="hiro">
      <a-entity gltf-model="#windturbine"></a-entity>
  	</a-marker>
  	<a-entity camera></a-entity>
    </a-scene>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  },
  data () {
    return {
      //
    }
  }
}
</script>

<template>
  <a-scene embedded arjs>
  	<a-marker preset="hiro">
      <a-sphere position="0 0.5 0" radius="1.25" color="#EF2D5E" shadow></a-sphere>
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

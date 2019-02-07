<template>
  <a-scene embedded arjs>
  	<a-marker preset="hiro">
            <a-box position='0 0.5 0' material='color: black;'></a-box>
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

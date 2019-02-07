
<template>
  <div>
    <a-scene embedded arjs>
  	  <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: black;"></a-box>
  	  </a-marker>
  	  <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>

export default {
  components: {
  }
};
</script>

<style lang="sass">
</style>

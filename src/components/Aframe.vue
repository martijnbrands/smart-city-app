<template>
    <a-scene embedded vr-mode-ui="enabled: false" arjs='sourceType: webcam; debugUIEnabled: false; trackingMethod: best;'>
        <!-- define your markers -->
        <a-marker preset='hiro'>
            <a-box position='0 0.5 0' material='color: green;'></a-box>
        </a-marker>
        <!-- define a simple camera -->
        <a-entity camera></a-entity>
    </a-scene>
</template>

<style lang="scss">
</style>
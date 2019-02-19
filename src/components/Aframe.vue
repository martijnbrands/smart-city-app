<template>
    <a-scene embedded vr-mode-ui="enabled: false" arjs='sourceType: webcam; debugUIEnabled: false; trackingMethod: best;'>
        <!-- define your markers -->
        <a-marker preset='hiro'>
        <!-- here define the content to display on top of the marker -->
            <a-box position='0 0.5 0' material='color: pink;'></a-box>
        </a-marker>
        <!-- define a simple camera -->
        <a-camera-static/>
    </a-scene>
</template>

<style lang="scss">
    a-scene { display: block; width: 300px; height: 300px;}
</style>
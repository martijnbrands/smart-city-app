<template>
    <a-scene embedded vr-mode-ui="enabled: false" arjs='sourceType: webcam; debugUIEnabled: false;'>
        <a-marker preset="hiro">
                <a-sphere position="0 0.5 0" radius="1.25" color="#EF2D5E" shadow></a-sphere>
        </a-marker>
        <a-entity camera></a-entity>
    </a-scene>
</template>

<style lang="scss">
    a-scene { display: block; width: 300px; height: 300px;}
</style>
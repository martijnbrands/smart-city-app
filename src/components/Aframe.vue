<template>
    <a-scene embedded vr-mode-ui="enabled: false" arjs='sourceType: webcam; debugUIEnabled: false; trackingMethod: best;'>
        <!-- Create a anchor to attach your augmented reality -->
		<a-anchor hit-testing-enabled='true'>

			<!-- Add your augmented reality here -->
			<a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
				<a-torus-knot radius='0.26' radius-tubular='0.05'>
					<a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
				</a-torus-knot>
			</a-box>

		</a-anchor>

		<!-- Define a static camera -->
		<a-camera-static/>
    </a-scene>
</template>

<style lang="scss">
    a-scene { display: block; width: 300px; height: 300px;}
</style>
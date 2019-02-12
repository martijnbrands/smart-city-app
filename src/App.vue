<template>
  <v-app>
    <v-content>
        <router-view></router-view>
    </v-content>
    <Navigation />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
      //
    }
  }
}
</script>

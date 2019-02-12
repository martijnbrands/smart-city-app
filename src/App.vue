<template>
  <v-app style="background-color: rgba(0,0,0,0);">
    <v-container>
      <v-content>
          <router-view></router-view>
      </v-content>
    </v-container>
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

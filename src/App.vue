<template>
  <v-app light style="background-color: white">
    <Header />
    <v-container>
      <v-content>
          <router-view></router-view>
      </v-content>
    </v-container>
    <Navigation />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation,
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>

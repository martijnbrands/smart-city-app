<template>
  <div>
    <v-toolbar app flat color="white">
        <v-btn icon @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title>{{$route.params.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
  </v-toolbar>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  components: {
    Carousel
  }
}
</script>
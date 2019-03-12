<template>
  <div>
    <v-toolbar app flat color="white">
      <v-toolbar-title>#Spoorzone</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <vue-instagram token="9435600714.7840e80.3387b7b7932742aab8fec2ea4c7870a2" :count="5" :tags="['cars', 'cars']" mediaType="image">
      <template slot="feeds" slot-scope="props">
        <li class="fancy-list"> {{ props.feed.link }} </li>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram>
  </div>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'App',

  components: {
    VueInstagram
  }
}
</script>
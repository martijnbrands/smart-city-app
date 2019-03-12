<template>
    <div>
        <h1>Heelo</h1>
        <vue-instagram token="9435600714.1677ed0.2ca56de8ca764ef396d9e134c7c66bfe" username="sockfortress" :count="5" :tags="['cars', 'travel']" mediaType="image">
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
  components: {
    VueInstagram
  }
}
</script>
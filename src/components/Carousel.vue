<template>
  <v-carousel fixed hide-delimiters hide-controls height="calc(100vh - 112px)">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
</v-carousel-item>
   
  </v-carousel>
  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://architectenweb.nl/media/illustrations/2015/05/58555e36-3a7d-4bff-ae7f-f4d5632b4b3b_800.jpg'
          },
          {
            src: 'https://images.readwrite.com/wp-content/uploads/2018/07/building-a-smart-city-825x500.jpg'
          }
        ]
      }
    }
  }
</script>
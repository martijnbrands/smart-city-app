<template>
    <v-bottom-nav :value="true" app fixed color="blue">
      <v-btn to="/" color="white" flat value="projecten">
        <span class="mdi mdi-format-list-bulleted"></span>
      </v-btn>
      <v-btn to="/augmented" color="white" flat value="augmented">
        <span class="mdi mdi-cube-scan"></span>
      </v-btn>
      <v-btn to="/projecten" color="white" flat value="projecten">
        <span class="mdi mdi-account-group"></span>
      </v-btn>
    </v-bottom-nav>
</template>

<style lang="sass">
span
  font-size: 24px
</style>
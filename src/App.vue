<template
>
  <v-app
  height="100vh"
  >
    <v-parallax
  src="img/pink-bg.jpg"
  height="100%"
  >
    <Nav />
    
    <v-content class="mx-12">
      <v-container>
        <v-row
        justify="center"
        class="my-6"
        >
          <img alt="stranger things logo" src="img/strangerThingsDark.png">
        </v-row>
      </v-container>
      <router-view></router-view>
    </v-content>
    </v-parallax>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
<<<<<<< Updated upstream
import Nav from '@/components/Nav'; /*--something going on with the linter, but works --*/
=======
import Nav from '@/components/Nav.vue'; /*--something going on with the linter, but works --*/
>>>>>>> Stashed changes

export default Vue.extend({
  name: 'App',
  components: { Nav },
  data: () => ({
    //
  }),
});
</script>

<style scoped>
  .v-parallax {
    height:100%;
  }
</style>
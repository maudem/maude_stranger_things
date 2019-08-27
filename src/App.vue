<template>
  <v-app>
    <Nav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav'; /*--something going on with the linter, but works --*/

export default Vue.extend({
  name: 'App',
  components: {Nav},
  data: () => ({
    //
  }),
});
</script>

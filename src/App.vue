<template>
  <v-app>
    <v-app-bar app height="75px">
      <v-toolbar-title class="headline text-uppercase">
        <span>Stranger Things</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Inspiration</v-btn>
        <v-btn text>Map</v-btn>
        <v-btn text>Gallery</v-btn>
        <v-btn text>Episodes</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-overflow-btn
        class="my-2"
        :items="language"
        label="Language"
        segmented
        target="#dropdown"
      >
        <span class="mr-2">Language</span>
      </v-overflow-btn>
      
      <!-- light/dark button -->
      <v-list-item-action>
        <v-switch v-model="value">
        </v-switch>
      </v-list-item-action>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    language: [
      {text: 'English', callback: () => alert('eng')},
      {text: 'Ig-pay Atin-lay', callback: () => alert('pig-latin')},
    ],
  }),
});
</script>

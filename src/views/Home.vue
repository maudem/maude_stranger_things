<template>
  <v-container class="home">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
          <v-card-text>
            <h2>Storyline</h2>
            <p>In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that there's more going on than meets the eye. </p>
            <v-btn>Inspiration</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
  h2 {
    padding: 15px 0;
  }
  p{
    color:black !important;
  }
</style>
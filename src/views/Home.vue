<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/strangerThingsDark.png">
    <div class="md-layout md-gutter">
      <md-content>
        <h3>Storyline</h3>
        <p>In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that there's more going on than meets the eye. </p>
      </md-content>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue'; // @ is an alias to /src

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {}
</script>

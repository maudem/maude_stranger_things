<template>
  <v-container class="home">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
          <v-list two-line>
          <!-- <template v-for="(data, episode-list) in english">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template> -->
        </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

 <script lang="ts">
import axios from "axios";

export default {
    data() {
        return {
            // logic for language dropdown
            language: [
              {text: 'English', callback: () => alert("english")},
              {text: 'Ig-pay Atin-lay', callback: () => alert('pig-latin')},
            ],
            //to hold the data responses
            english: [],
            pigLatin: [],
            // for loop for navs
            links:[
                {text:'Inspiration', route: '/Inspiration'},
                {text:'Map', route: '/Map'},
                {text:'Gallery', route: '/Gallery'},
                {text:'Episodes', route: '/Episodes'},

            ],
        }
    },
    mounted() {

        axios.get("../../../data/en_US.json")
        .then(response => {
            let english = response.data["episode-list"];
            console.table(english);
        }),
        
        axios.get("../../../data/la_PG.json")
        .then(response => {
            let pigLatin = response.data["episode-list"];
            console.table(pigLatin);

        })
        .catch(err => {
            console.log(err);
        })
    }
}
</script>
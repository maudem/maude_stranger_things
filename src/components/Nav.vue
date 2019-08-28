<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon 
                @click="mobileMenu = !mobileMenu"
                large
            >
            </v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <router-link to="/">Stranger Things</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
        </v-app-bar>
        <v-navigation-drawer 
            app 
            absolute
            v-model="mobileMenu"
            py-30
        >
            <v-list nav>
                <v-list-item 
                v-for="link in links"
                :key="link.text"
                :to="link.route"
                >
                    
                <v-list-item-title>{{ link.text }}</v-list-item-title>
                
                    
                </v-list-item>
                <v-overflow-btn
                class="my-2 hidden-sm-and-down"
                :items="language"
                label="Language"
                segmented
                target="#dropdown"
            >
                <span class="mr-2">Language</span>
            </v-overflow-btn>

            </v-list>
        </v-navigation-drawer>
        
    </nav>
</template>

<script lang="ts">
import axios from "axios";

export default {
    data() {
        return {
            // logic for language dropdown
            mobileMenu: false,
            drawer:null,
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
            // this.english = [...response.data]
        }),
        axios.get("../../../data/la_PG.json")
        .then(response => {
            // this.pigLatin = [...response.data]
        })
        .catch(err => {

        })
    }
}
</script>
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
import axios from 'axios';

export default {
    data() {
        return {
            // logic for language dropdown
            mobileMenu: false,
            language: [
              {text: 'English', value: 'english', callback: () => localStorage.setItem('language', 'english')},
              {text: 'Ig-pay Atin-lay', value: 'pigLatin', callback: () => localStorage.setItem('language', 'pigLatin')},
            ],
            //to hold the data responses
            method(){
                if(localStorage.language) {this.language = localStorage.language;
                }
                // console.log(language);
            },
            watch:{
                language(newLanguage: string) {
                    localStorage.language = newLanguage;
                }
            },
            // for loop for navs
            links: [
                {text: 'Inspiration', route: '/Inspiration'},
                {text: 'Map', route: '/Map'},
                {text: 'Gallery', route: '/Gallery'},
                {text: 'Episodes', route: '/Episodes'},

            ],
        };
    },
};
</script>
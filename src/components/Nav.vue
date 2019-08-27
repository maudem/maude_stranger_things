<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon 
                @click="mobileMenu = !mobileMenu"
                class="hidden-md-and-up"
                large
            >
            </v-app-bar-nav-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Stranger Things</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-list-item 
                v-for="link in links"
                :key="link.text"
                :to="link.route"
                >
                <v-list-item-content>{{ link.text }}</v-list-item-content>
                </v-list-item>
            </v-toolbar-items>
            <v-spacer></v-spacer>

            <v-overflow-btn
                class="my-2 hidden-sm-and-down"
                :items="language"
                label="Language"
                segmented
                target="#dropdown"
            >
                <span class="mr-2">Language</span>
            </v-overflow-btn>
        
            <!-- light/dark button -->
            <v-list-item-action class="hidden-sm-and-down">
                <v-switch>
                </v-switch>
            </v-list-item-action>

        </v-app-bar>

        <v-navigation-drawer 
            app 
            class="hidden-md-and-up"
            v-model="mobileMenu"
        >
            <v-list>
                <v-list-item 
                v-for="link in links"
                :key="link.text"
                :to="link.route"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            // logic for language dropdown
            mobileMenu: false,
            language: [
              {text: 'English', callback: () => alert('eng')},
              {text: 'Ig-pay Atin-lay', callback: () => alert('pig-latin')},
            ],
            // for loop for navs
            links:[
                {text:'Inspiration', route: '/Inspiration'},
                {text:'Map', route: '/Map'},
                {text:'Gallery', route: '/Gallery'},
                {text:'Episodes', route: '/Episodes'},

            ],
        }
    }
}   
</script>
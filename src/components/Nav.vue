<template>
    <nav>
        <v-app-bar flat app>
            <v-icon 
                @click="mobileMenu = !mobileMenu"
                class="hidden-md-and-up"
                large
            >
                menu
            </v-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Stranger Things</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text>Inspiration</v-btn>
                <v-btn text>Map</v-btn>
                <v-btn text>Gallery</v-btn>
                <v-btn text>Episodes</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>

            <!-- <v-overflow-btn
                class="my-2 hidden-sm-and-down"
                :items="language"
                label="Language"
                segmented
                target="#dropdown"
            >
                <span class="mr-2">Language</span>
            </v-overflow-btn> -->
        
            <!-- light/dark button -->
            <v-list-item-action class="hidden-sm-and-down">
                <v-switch>
                <!-- <v-switch v-model="value"> -->
                </v-switch>
            </v-list-item-action>

        </v-app-bar>

        <v-navigation-drawer 
            app 
            class="hidden-md-and-up"
            v-model="mobileMenu"
        >
            <v-btn text>Inspiration</v-btn>
            <v-btn text>Map</v-btn>
            <v-btn text>Gallery</v-btn>
            <v-btn text>Episodes</v-btn>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            mobileMenu: false
        }
    }
    // language: [
    //   {text: 'English', callback: () => alert('eng')},
    //   {text: 'Ig-pay Atin-lay', callback: () => alert('pig-latin')},
    // ],
}
</script>
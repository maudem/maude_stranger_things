 <template>
  <v-container class="gallery">
    <v-carousel 
    height="700"
    >
        <v-carousel-item
        v-for="image in images" 
        :key="image.index"
        >
            <v-img
            :src="image.src"
            aspect-ratio="3.0"
            height="600"
            >
            </v-img>
            <v-list
            >
                <v-list-item-content>
                    {{image.text}}                    
                </v-list-item-content>
            </v-list>
        </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
    import axios from 'axios';
    import language from '../components/Nav.vue';
    import { consoleInfo } from 'vuetify/src/util/console';

    export default {
        data() {
            return {
                // to hold the data responses
                images: [],
            };
        },
    mounted() {
            // logic for get the right data int he correct language
        if (localStorage.getItem('language') === 'pigLatin') {
            axios.get('../../../data/la_PG.json')
            .then((response) => {
                this.images = response.data['gallery'];
            });
        } else {
            axios.get('../../../data/en_US.json')
            .then((response) => {
                this.images = response.data['gallery'];
            });
        }
    },
    components: {
        language,
    },
};
</script>
<style lang="scss" scoped>
    img {
        max-width: 50%;
    }
    .v-list {
        padding:20px;
    }
    .v-list-item__content {
        justify-content: center;
    }
</style>
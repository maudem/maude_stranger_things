 <template>
  <v-container class="inspiration">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
            <v-list
            v-for="snippet in snippets"
            :key="snippet.index" 
            >
                <v-list-item>
                    {{snippet}}
                </v-list-item>
            </v-list>
        </v-card>
        <v-card>
            <h1>
            {{heading}}
            </h1>
            <p>{{desc}}</p>
        </v-card>
        <v-card>
            <p>{{quote.text}}</p>
            <i>{{quote.author}}</i>
        </v-card>
        <v-card>
            <VideoPlayer />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    import axios from 'axios';
    import language from '../components/Nav.vue';
    import { consoleInfo } from 'vuetify/src/util/console';
    import VideoPlayer from '../components/VideoPlayer';

    export default {
        data() {
            return {
                // to hold the data responses
                snippets: [],
                heading: [],
                desc: [],
                quote: [],
                // loading:true
            };
        },
    mounted() {
          // logic for get the right data int he correct language
        if (localStorage.getItem('language') === 'pigLatin') {
            axios.get('../../../data/la_PG.json')
            .then((response) => {
                this.snippets = response.data.snippets;
            });
        } else {
            axios.get('../../../data/en_US.json')
            .then((response) => {
                this.snippets = response.data.snippets;
                this.heading = response.data.heading;
                this.desc = response.data.description;
                this.quote = response.data.quote;
            });
        }
    },
    components: {
        language,
        VideoPlayer,
    },
};
</script>
<style lang="scss" scoped>
</style>
 <template>
  <v-container class="episode-list">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
          <v-list>
                <v-list-item
                v-for="episode in episodes" 
                :key="episode.index"
                >
                    <v-list-item-content>
                        <v-list-item-title><strong>
                            Season: </strong>{{episode.season}}
                        </v-list-item-title>
                        <v-list-item-title>
                            <strong>Episode: </strong>{{episode.name}}
                        </v-list-item-title>
                        <v-list-item-title>
                            <strong>Rating: </strong>{{episode.rating}}
                        </v-list-item-title>
                    </v-list-item-content>
                    
                </v-list-item>
            </v-list>
        </v-card>
      </v-flex>
    </v-layout>
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
                episodes: [],
                loading:true
            }
        },
    mounted() {
            // logic for get the right data int he correct language
        if (localStorage.getItem('language') === 'pigLatin') {
            axios.get('../../../data/la_PG.json')
            .then(response => {
                this.episodes = response.data['episode-list'];
            });
        } else {
            axios.get('../../../data/en_US.json')
            .then(response => {
                this.episodes = response.data['episode-list'];
            })
             .catch(error => {
      console.log(error)
    });
        }
    },
    components: {
        language,
    },
};
</script>
<style lang="scss" scoped>
    .v-list {
        height: 700px;
        overflow:scroll;
    }
</style>
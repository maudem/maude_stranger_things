 <template>
  <v-container class="episode-list">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
          <v-list three-line>
                <v-list-item
                v-for="episode in episodes" 
                :key="episode.index"
                >
                <p><strong>Season: </strong>{{episode.season}}</p>
                <br>
                <p><strong>Episode: </strong>{{episode.name}}</p>
                <br>
                <p><strong>Rating: </strong>{{episode.rating}}</p>
                </v-list-item>
            </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts'>
    import axios from 'axios';
    import language from '../components/Nav.vue';
    import { consoleInfo } from 'vuetify/src/util/console';

    export default {
        data() {
            return {
                // to hold the data responses
                episodes: [],
            };
        },
    created() {
            // logic for get the right data int he correct language
        if (localStorage.getItem('language') === 'pigLatin') {
            axios.get('../../../data/la_PG.json')
            .then((response) => {
                this.episodes = response.data['episode-list'];
            });
        } else {
            axios.get('../../../data/en_US.json')
            .then((response) => {
                this.episodes = response.data['episode-list'];
            });
        }
    },
    components: {
        language,
    },
};
</script>
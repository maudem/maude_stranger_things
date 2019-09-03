 <template>
  <v-container class="episode-list">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <v-card>
          <v-list three-line>
                <v-list-item
                v-for="image in images" 
                :key="image.index"
                >
                <v-img
                :src='image.src'
                ></v-img>
                <br>
                <p><strong>Description: </strong>{{image.text}}</p>
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
                images: [],
            };
        },
    created() {
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
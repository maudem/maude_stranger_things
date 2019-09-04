 <template>
  <v-container class="inspiration">
    <v-layout row wrap>
      <v-flex md7 offset-md3>
        <video
        width="100%"
        controls
        ref="video"
        ></video>
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
                video: [0],
                // loading:true
            };
        },
    created() {
          // logic for get the right data int he correct language
        if (localStorage.getItem('language') === 'pigLatin') {
            axios.get('../../../data/la_PG.json')
            .then((response) => {
                this.video = response.data['video-embed'];
            });
        } else {
            axios.get('../../../data/en_US.json')
            .then((response) => {
                let video = response.data['video-embed'];
                // video.play();
                
            });
        }
    },
    components: {
        language,
    },
};
</script>
<style lang="scss" scoped>
</style>
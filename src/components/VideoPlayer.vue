 <template>
        <video
        width="100%"
        controls
        autoplay
        :src="video" 
        type="video/mp4"
        >
        </video>
</template>

<script>
    import axios from 'axios';
    import language from '../components/Nav.vue';

    export default {
        data() {
            return {
                // to hold the data responses
                video: [],
                // loading:true
            };
        },
    mounted() {
        let axiosConfig = {
            headers: {
                "Content-Type": "Content-Type: application/json",
                "X-Metabase-Session": "id",
                "Access-Control-Allow-Origin": "*",
            }
        }
        // logic for get the right data int he correct language
        axios.get('../../data/en_US.json', axiosConfig)
        .then((response) => {
            this.video = response.data['video-embed'];
        });
    },
    components: {
        language,
    },
};
</script>
<style lang="scss" scoped>
</style>
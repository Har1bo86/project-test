<script>
import axios from 'axios';
import FilmCard from './FilmCard.vue';
import Loader from './UI/Loader.vue';
import Selectors from './Selectors.vue';
export async function fetchPosts(api) {
    try {
        this.isPostsLoading = true;
        setTimeout(async () => {
            const response = await axios.get(api);
            this.posts = response.data.data;
            this.isPostsLoading = false;
        }, 200);
    } catch (e) {
        alert('Ошибка');
    }
}

export default {
    components: { FilmCard, Loader, Selectors },
    data() {
        return {
            posts: [],
            isPostsLoading: false,
        };
    },

    methods: {
        fetchPosts,
        sortFilmsByTitle() {
            this.posts.sort((a, b) => {
                const isALatin = /^[A-Za-z]/.test(a.title);
                const isBLatin = /^[A-Za-z]/.test(b.title);

                if (isALatin && !isBLatin) return -1;
                if (!isALatin && isBLatin) return 1;
                return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
            });
        },
        sortFilmsByYear() {
            this.posts.sort((a, b) => a.year - b.year);
        }
    },
    mounted() {
        this.fetchPosts('https://mashroom-movies-api.netlify.app/api/movies');
    },
};
</script>

<template>
    <div class="container">
        <div class="films">
            <Selectors :sortFilms="sortFilmsByTitle" :sortFilmsByYear="sortFilmsByYear"></Selectors>
            <FilmCard class="post" v-for="post in posts" v-if="!isPostsLoading" key="post.id" :post="post">
            </FilmCard>
            <Loader v-else></Loader>
        </div>
    </div>
</template>

<style lang="scss">
.container {
    margin: 0 auto;
    width: 70%;
    display: flex;
    align-items: center;

    .films {
        width: 100%;
        padding: 0;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
}
</style>

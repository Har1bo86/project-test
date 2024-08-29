<template>
  <div v-if="isPostsLoading">
    <Loader />
  </div>
  <div :key="post.id" v-else-if="post" class="mainCard">
    <div class="blockLeft"></div>
    <div class="blockRight">
      <div class="rightTop">
        <div class="titleFilm">{{ post.title }}</div>
        <div v-show="post.collapse?.duration" class="durationFilm">
          {{ Array.isArray(post.collapse?.duration) ? post.collapse.duration.join(', ') : post.collapse?.duration }}
          <img class="img" src="/src/img/Vector.png" />
        </div>
      </div>
      <div class="genresFilm">{{ post.year }}, {{ Array.isArray(post.genres) ? post.genres.join(', ') : post.genres }}
      </div>
      <div class="directorsFilm">Режиссёр: {{ Array.isArray(post.directors) ? post.directors.join(', ') : post.directors
        }}</div>
      <div class="actorsFilm">
        <div class="actorFilm">Актёры:</div>
        <div class="listFilm">{{ Array.isArray(post.actors) ? post.actors.join(', ') : post.actors }}</div>
      </div>
      <div class="desc">{{ post.description }}</div>
    </div>
  </div>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import axios from 'axios';
import Loader from './UI/Loader.vue';
import ErrorPage from './ErrorPage.vue';

export default {
  components: { Loader, ErrorPage },

  data() {
    return {
      post: null,
      isPostsLoading: false,
    };
  },

  methods: {
    async loadPosts() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(`https://mashroom-movies-api.netlify.app/api/movie/${this.$route.params.id}`);
          this.post = response.data.data;
          this.isPostsLoading = false;
        }, 200);
      } catch (e) {
        alert('Ошибка');
      }

    }
  },
  mounted() {
    this.loadPosts()


  }
};
</script>
<style lang="scss" scoped>
.mainCard {
  width: 70%;
  background: #4D4747;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  display: flex;
  flex-direction: row;

  .blockLeft {
    width: 15%;
    background-color: #C4C4C4;
    background-image: url(/src/img/img.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

  }

  .blockRight {
    width: 85%;
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    .rightTop {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
      font-family: "Roboto";

      .titleFilm {
        font-size: 36px;
        color: #FFFFFF;
        font-family: "Roboto";

      }

      .durationFilm {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 184px;
        background-color: #C4C4C4;
        color: #000000;
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        align-items: center;
        padding-left: 5px;
        clip-path: polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%);

        .img {
          height: 18px;
          width: 16px;
          margin-left: 10px;
          background: transparent;
        }
      }
    }

    .genresFilm,
    .directorsFilm {
      font-size: 12px;
      color: #988F8F;
      margin-top: 10px;
      text-transform: uppercase;
      font-family: "Roboto";
    }

    .actorsFilm {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #E5E5E5;
      font-size: 12px;
      margin-top: 12px;

      .actorFilm {
        color: #988F8F;
        text-transform: uppercase;
        font-family: "Roboto";
      }

      .listFilm {
        color: #FFFFFF;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
      }
    }

    .desc {
      font-size: 16px;
      color: #FFFFFF;
      margin: 20px 20px 20px 0;
    }
  }
}



@media (max-width: 767.98px) {
  .mainCard {
    display: flex;
    flex-direction: column;

    .blockLeft {
      width: 100%;
      height: auto;
    }

    .blockRight {
      width: 100%;
      margin-left: 0;

      .rightTop {
        flex-direction: column;
        align-items: flex-start;

        .titleFilm {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .durationFilm {
          width: auto;
          margin-top: 5px;
          height: auto;
        }
      }

      .genresFilm,
      .directorsFilm,
      .actorsFilm,
      .listFilm {
        font-size: 14px;
      }

      .desc {
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }
}



@media (min-width: 768px) and (max-width: 991.98px) {
  .mainCard {
    .blockLeft {
      width: 25%;
    }

    .blockRight {
      width: 75%;

      .rightTop,
      .titleFilm {
        font-size: 28px;
      }

      .genresFilm,
      .directorsFilm,
      .actorsFilm,
      .listFilm {
        font-size: 16px;
      }

      .desc {
        font-size: 16px;
      }
    }
  }
}

@media (min-width: 992px) {
  .mainCard {
    .blockLeft {
      width: 20%;
    }

    .blockRight {
      width: 80%;

      .rightTop .titleFilm {
        font-size: 32px;
      }

      .genresFilm,
      .directorsFilm,
      .actorsFilm,
      .listFilm {
        font-size: 18px;
      }

      .desc {
        font-size: 18px;
      }
    }
  }
}
</style>

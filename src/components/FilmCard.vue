<script>
export default {
    computed: {
        formattedDirector() {
            return Array.isArray(this.post.directors)
                ? this.post.directors.join(', ')
                : this.post.directors;
        },
        formattedActors() {
            return Array.isArray(this.post.actors)
                ? this.post.actors.join(', ')
                : this.post.actors;
        }
    },
    props: {
        post: {
            type: {
                id: Number,
                poster: String,
                title: String,
                year: String,
                genres: String,
                directors: String,
                actors: String,
                description: String,
                collapse: String
            }
        },
    },
}

</script>

<template>
    <div class="film">
        <div class="img">
        </div>

        <div class="main">
            <div class="mainTop">
                <div class="title" @click="$router.push(`/FilmPage/${post.id}`)">{{ post.title }}</div>
                <div v-show="post.collapse?.duration" class="duration">
                    {{ Array.isArray(post.collapse?.duration) ? post.collapse.duration.join(', ') :
                        post.collapse?.duration }}
                    <img class="img" src="/src/img/Vector.png" />
                </div>
            </div>
            <div class="genres">{{ post.year }}, {{ post.genres.join(', ') }}</div>
            <div class="directors">Режиссер: {{ formattedDirector }}</div>
            <div class="actors">
                <div class="actor">Актёры:</div>
                <div class="list">{{ formattedActors }}</div>
            </div>
            <div class="description">{{ post.description }}</div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.film {
    width: 100%;
    background: #4D4747;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    transition: transform 200ms;

    .img {
        width: 15%;
        background-color: #C4C4C4;
        background-image: url(/src/img/img.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;

    }

    .main {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin-left: 15px;

        .mainTop {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 15px;
            font-family: "Roboto";

            .title {
                font-size: 36px;
                color: #FFFFFF;
                font-family: "Roboto";
                cursor: pointer;

            }

            .duration {
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

        .genres,
        .directors {
            font-size: 12px;
            color: #988F8F;
            margin-top: 10px;
            text-transform: uppercase;
            font-family: "Roboto";
        }

        .actors {
            display: flex;
            flex-direction: row;
            color: #E5E5E5;
            font-size: 12px;
            margin-top: 12px;
            align-items: center;

            .actor {
                color: #988F8F;
                text-transform: uppercase;
                font-family: "Roboto";
            }

            .list {
                color: #FFFFFF;
                margin-left: 10px;
                margin-right: 10px;
                font-size: 12px;
                font-family: sans-serif;
            }
        }

        .description {
            font-size: 16px;
            color: #FFFFFF;
            margin: 20px 20px 20px 0;
        }
    }
}

.film:hover {
    transform: scale(1) translateY(-8px);
    box-shadow: 0px 7px 8px 2px rgba(0, 0, 0, 0.33);
}


@media (max-width: 767.98px) {
    .film {
        display: flex;
        flex-direction: column;

        .img {
            width: 100%;
            height: auto;
        }

        .main {
            width: 100%;
            margin-left: 0;

            .mainTop {
                flex-direction: column;
                align-items: flex-start;

                .title {
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                .duration {
                    width: auto;
                    margin-top: 5px;
                    height: auto;
                }
            }

            .genres,
            .directors,
            .actors .actor {
                font-size: 14px;
            }

            .description {
                font-size: 14px;
                margin: 10px 0;
            }
        }
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .film {
        .img {
            width: 25%;
        }

        .main {
            width: 75%;

            .mainTop .title {
                font-size: 28px;
            }

            .genres,
            .directors,
            .actors .actor {
                font-size: 16px;
            }

            .description {
                font-size: 16px;
            }
        }
    }
}

@media (min-width: 992px) {
    .film {
        .img {
            width: 20%;
        }

        .main {
            width: 80%;

            .mainTop .title {
                font-size: 32px;
            }

            .genres,
            .directors,
            .actors .actor {
                font-size: 18px;
            }

            .description {
                font-size: 18px;
            }
        }
    }
}
</style>

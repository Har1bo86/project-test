<script>
import SortCheckbox from './SortCheckbox.vue';

export default {
    components: { SortCheckbox },
    props: {
        sortFilms: {
            type: Function,
            required: true
        },
        sortFilmsByYear: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
    <div class="selectors">
        <p class="text">Фильмы</p>
        <div class="sort">
            <SortCheckbox :sortByTitle="sortFilms" :sortByYear="sortFilmsByYear" />
        </div>
        <div class="line"></div>
    </div>
</template>

<style lang="scss">
.selectors {
    font-family: "Roboto" sans-serif;
    font-style: normal;
    font-weight: normal;
    width: 100%;

    .text {
        color: #FFFFFF;
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        margin: 30px 0 15px 0;
        letter-spacing: 2px;
    }

    .sort {
        display: flex;
        flex-direction: row;
        margin-top: 10px;

        .sortBy {
            display: flex;
            flex-direction: row;
            margin-right: 20px;
            align-items: center;

            .SortByNames,
            .SortByYears {
                width: 15px;
                height: 15px;
                background-color: transparent;
                border: 1px solid #C4C4C4;
                appearance: none;
                cursor: pointer;
            }

            .SortByNames:checked,
            .SortByYears:checked {
                background-color: #FF5252FA;
                color: #FFFFFF;
            }


            & p {
                font-size: 16px;
                margin-left: 5px;
                color: #C4C4C4;
            }
        }

    }

    .line {
        height: 1px;
        border-bottom: 1px solid #C4C4C4;
        margin-top: 0px;
        margin-bottom: 10px;
    }
}
</style>

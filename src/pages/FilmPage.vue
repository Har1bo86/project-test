<script>
import Header from '@/components/Header.vue';
import Films from '@/components/Films.vue';
import FilmById from '@/components/FilmById.vue';
export default {
    components: { Header, Films, FilmById },
}
</script>

<template>
    <div class="FilmPage">
        <Header></Header>
        <RouterLink class="btnTo" to="/">
            <img class="img" src="/src/img/Vector32.png" />
            <p class="text1">Назад к списку</p>
        </RouterLink>
        <FilmById></FilmById>
    </div>
</template>

<style lang="scss">
.FilmPage {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btnTo {
        width: 70%;
        margin-top: 40px;
        color: #FF5252FA;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 25px;
        text-decoration: none;

        .img {
            margin-right: 20px;
            height: 20px;
        }

        .text1 {
            font-size: 20px;
            text-decoration: underline;
            text-underline-offset: 5px;
        }
    }
}
</style>

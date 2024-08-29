<script>
export default {
}

</script>

<template>
    <div class="loader">
        <span class="loader_inner semicirle"></span>
        <span class="loader_outer semicirle"></span>
    </div>
</template>

<style lang="scss">
.loader {
    width: 300px;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .semicirle {
        position: absolute;
        content: "";
        border: solid transparent 10px;
        border-radius: 50%;
    }

    .loader_inner {
        border-right-color: #FA2828FA;
        border-top-color: #FA2828FA;
        height: 60px;
        width: 60px;
        animation: loader 1s infinite linear;
    }

    .loader_outer {
        border-right-color: #000000;
        border-top-color: #000000;
        height: 100px;
        width: 100px;
        animation: loader 1s infinite linear reverse;
    }

}

@keyframes loader {
    0% {
        rotate: 0deg;
    }

    100% {
        rotate: 360deg;
    }
}
</style>

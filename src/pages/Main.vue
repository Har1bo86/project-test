<script>
import Header from '@/components/Header.vue';
import Selectors from '@/components/Selectors.vue';
import Films from '@/components/Films.vue';

export default {
    components: { Header, Selectors, Films },
}

</script>

<template>
    <div class="Main">
        <Header></Header>
        <Films></Films>

    </div>
</template>

<style lang="scss">
.Main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

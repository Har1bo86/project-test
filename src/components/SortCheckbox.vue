<script>
export default {
    props: {
        sortByTitle: Function,
        sortByYear: Function,
    },
    data() {
        return {
            sortByNameChecked: false,
            sortByYearChecked: false,
        };
    },
    methods: {
        handleSort(type) {
            if (type === 'name') {
                this.sortByNameChecked = true;
                this.sortByYearChecked = false;
                this.sortByTitle();
            } else if (type === 'year') {
                this.sortByYearChecked = true;
                this.sortByNameChecked = false;
                this.sortByYear();
            }
        },
    },
};
</script>

<template>
    <div class="sort-options">
        <label class="checkbox-container">
            <input type="checkbox" v-model="sortByNameChecked" @change="handleSort('name')" />
            <span class="checkmark"></span>
            Отсортировать по названию
        </label>
        <label class="checkbox-container">
            <input type="checkbox" v-model="sortByYearChecked" @change="handleSort('year')" />
            <span class="checkmark"></span>
            Отсортировать по году
        </label>
    </div>
</template>



<style lang="scss">
.sort-options {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .checkbox-container {
        display: flex;
        position: relative;
        padding-left: 25px;
        margin-right: 20px;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
        color: #C4C4C4;

        & input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }

        .checkmark {
            position: absolute;
            top: 1px;
            left: 0;
            height: 15px;
            width: 16px;
            background-color: #363232;
            border: 1px solid #C4C4C4;
        }

    }

}



.checkbox-container input:checked~.checkmark {
    background-color: #FF5252FA;
    border: none;
    top: 2px;
}

.checkbox-container input:checked~.checkmark:after {
    display: block;
}

.checkbox-container .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
</style>
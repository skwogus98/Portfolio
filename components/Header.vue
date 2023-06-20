<template>
    <header class="sticky border-b-2 w-full h-16 justify-between text-2xl grid grid-cols-5 place-content-stretch text-center z-10 ">
        <div class="h-16 header-shadow align-middle flex justify-center items-center" v-for="(title, index) in titles" :key="index">
            <p class="text-white textShadow">{{ title }}</p>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            titles: ["Introduce", "Career", "Projects", "Skills", "Contact"],
        };
    },
};
</script>

<style scoped>
.textShadow{
    text-shadow: -1px 0px #4F5954, 0px 1px #4F5954, 1px 0px #4F5954, 0px -1px #4F5954;
}

</style>
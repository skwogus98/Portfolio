<template>
    <header class="fixed border-b-2 w-full h-16 justify-between text-2xl grid grid-cols-5 place-content-stretch text-center z-10">
        <div class="h-16 header-shadow align-middle flex justify-center items-center" v-for="(title, index) in titles" :key="index">
            <div @click="scrollToElement(index)" class="text-white textShadow">{{ title }}</div>
        </div>
    </header>
</template>

<script>
export default {
    props:{
        pages:[]
    },
    data() {
        return {
            titles: ["Introduce", "Career", "Projects", "Skills", "Contact"],
        };
    },
    methods: {
        scrollToElement(index) {
            const element = this.pages[index];
            console.log(element)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
    mounted(){
    }
};
</script>

<style scoped>
.textShadow {
    text-shadow: -1px 0px #4f5954, 0px 1px #4f5954, 1px 0px #4f5954, 0px -1px #4f5954;
}
</style>

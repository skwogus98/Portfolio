<template>
    <div class="w-full text-center">
        <p class="text-white text-8xl my-20 px-20 font-light drop-shadow">새로운 도전을 즐기고 지속적인 학습을 추구하는 나재현 입니다.</p>
        <p class="text-white text-2xl drop-shadow-2xl">프론트엔드와 백엔드 개발자를 지망하고있습니다.<br />최신 기술의 활용과 학습을 즐깁니다.</p>
        <div class="mt-40">
            <font-awesome-icon @click="goCareer" class="animate-bounce" :icon="['fas', 'angle-down']" size="2xl" style="color: #d7d8d9" />
        </div>
    </div>
</template>
<script>
export default {
    props:{
        career: null
    },
    methods: {
        goCareer(){
            const element = this.career;
            console.log(element)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    },
};
</script>
<style>
#introduce {
    background-image: url("/main.png");
}
.textShadow {
    text-shadow: -1px 0px #4f5954, 0px 1px #4f5954, 1px 0px #4f5954, 0px -1px #4f5954;
}
</style>

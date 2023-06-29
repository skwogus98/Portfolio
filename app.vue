<template>
    <div class="main">
        <Header :pages="pages"></Header>
        <div ref="introduce" id="introduce" class="w-full h-screen overflow-hidden flex items-center">
            <Introduce :career="pages[1]"></Introduce>
        </div>
        <div ref="career" class="w-full h-screen overflow-hidden"></div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Introduce from "./layouts/Introduce.vue";
export default {
    data() {
        return {
            pages: [],
        };
    },
    components: { Header, Introduce },
    mounted() {
        this.pages.push(this.$refs.introduce);
        this.pages.push(this.$refs.career);
        this.pages.push(this.$refs.projecs);
        this.pages.push(this.$refs.skills);
        this.pages.push(this.$refs.contact);

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        this.$nextTick(() => {
            const observer = new IntersectionObserver(this.handleIntersection, options);
            observer.observe(this.$refs.introduce);
            observer.observe(this.$refs.career);
            observer.observe(this.$refs.projecs);
        });
    },
    methods: {
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 해당 슬라이드가 뷰포트 안에 들어온 경우
                    // 슬라이드 이동 또는 원하는 액션을 수행하는 코드를 작성합니다.
                    console.log(entry.target); // 현재 보이는 슬라이드 요소
                }
            });
        },
    },
};
</script>

<style scoped>
.main {
    height: 500%;
}
#introduce {
    background-image: url("/main.png");
}
</style>

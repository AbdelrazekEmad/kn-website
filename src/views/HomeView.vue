<template>
    <HomeSlider />
    <AboutContent />
    <CoursesSection />
    <TeachersCards />
    <FeaturesSection />
    <LatestNews />
</template>

<script>

import Tr from "@/i18n/translation";
import AboutContent from "@/components/AboutContent.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import TeachersCards from "@/components/TeachersCards.vue";
import LatestNews from "@/components/LatestNews.vue";
import HomeSlider from "@/components/HomeSlider.vue";
import CoursesSection from "@/components/CoursesSection.vue";

export default {
    name: "HomeView",
    components: {
        AboutContent,
        FeaturesSection,
        TeachersCards,
        LatestNews,
        HomeSlider,
        CoursesSection
    },
    data() {
        return {
            Tr: Tr,
        };
    },
};
</script>

<style lang="scss" scoped></style>
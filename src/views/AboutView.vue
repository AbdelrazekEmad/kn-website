<template>
    <main-banner :type="'breadcrumb'" :banner-title="$t('ABOUT.MAIN_BANNER')" :current-page="$t('ABOUT.MAIN_BANNER')"
        :img-url="'https://placehold.co/900x600'" />
    <AboutContent />

    <section class="py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-12 col-lg-6" v-for="vision in visions" :key="vision.id">
                    <VisionBox :title="vision.title" :text="vision.text" />
                </div>
            </div>
        </div>
    </section>

    <FeaturesSection />
    <TeachersCards />
    <FAQSection />
</template>

<script>

import MainBanner from "@/components/MainBanner.vue";
import Tr from "@/i18n/translation";
import AboutContent from "@/components/AboutContent.vue";
import VisionBox from "@/components/VisionBox.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import FAQSection from "@/components/FAQSection.vue";
import TeachersCards from "@/components/TeachersCards.vue";


export default {
    name: "AboutView",
    components: {
        MainBanner,
        AboutContent,
        VisionBox,
        FeaturesSection,
        FAQSection,
        TeachersCards
    },
    data() {
        return {
            Tr: Tr,
            visions: [
                {
                    id: 1,
                    title: "Who We Are",
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam.'
                },
                {
                    id: 2,
                    title: "Mission & Vision",
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam.'
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
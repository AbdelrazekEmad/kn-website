<template>
    <HomeSlider />
    <AboutContent>
        <template #content>
            <div class="col-12 col-lg-6">
                <div class="about-content__box">
                    <h2 class="about-content__title">
                        Learn Quran online with Tajweed! Learn Quran
                    </h2>

                    <p class="about-content__text">
                        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie,
                        musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un
                        nov lingua franca.
                    </p>

                    <p class="about-content__text">
                        On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform
                        grammatica, pronunciation.
                    </p>

                    <MainButton text="Read More" link="about-us" />
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="about-content__box">
                    <img class="about-content__img" src="https://placehold.co/900x600" alt="about us" title="about us">
                </div>
            </div>
        </template>
    </AboutContent>
    <CoursesSection />
    <TeachersCards />
    <FeaturesSection />
    <LatestNews />
    <FeedbackSection />
</template>

<script>

import Tr from "@/i18n/translation";
import AboutContent from "@/components/AboutContent.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import TeachersCards from "@/components/TeachersCards.vue";
import LatestNews from "@/components/LatestNews.vue";
import HomeSlider from "@/components/HomeSlider.vue";
import CoursesSection from "@/components/CoursesSection.vue";
import FeedbackSection from "@/components/FeedbackSection.vue";
import MainButton from '@/components/MainButton.vue';

export default {
    name: "HomeView",
    components: {
        AboutContent,
        FeaturesSection,
        TeachersCards,
        LatestNews,
        HomeSlider,
        CoursesSection,
        FeedbackSection,
        MainButton
    },
    data() {
        return {
            Tr: Tr,
        };
    },
};
</script>

<style lang="scss" scoped>
.about-content {
    &__box {
        height: 100%;
    }

    &__title {
        font-size: 32px;
        font-weight: 400;
        line-height: 1;
        font-family: var(--secondary-font);
        color: var(--text-color);
        margin-bottom: 24px;
    }

    &__text {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 16px;
        color: var(--text-color);

        &:last-of-type {
            margin-bottom: 24px;
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        border-radius: 24px;
        border-end-start-radius: 0px;
        object-fit: cover;
    }
}
</style>
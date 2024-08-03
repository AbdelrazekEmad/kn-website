<template>
    <section class="feedback py-5">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-lg-6">
                    <div class="feedback__boxes">
                        <h2 class="feedback__main-title">
                            {{ $t('HOME.FEEDBACK') }}
                        </h2>


                        <Carousel v-bind="getSettings">
                            <Slide v-for="(feedback, index) in feedbacks" :key="index">
                                <div class="feedback__item">
                                    <i class="feedback__icon fa-solid fa-quote-right"></i>


                                    <p class="feedback__text">{{ feedback.message }}</p>

                                    <div class="feedback__rate">
                                        <i v-for="rate in feedback.rate" :key="rate"
                                            class="feedback__rate-icon fa-solid fa-star"></i>
                                    </div>

                                    <div class="feedback__widget">
                                        <img class="feedback__img" :src="feedback.avatar" :alt="feedback.author"
                                            :title="feedback.author">

                                        <h3 class="feedback__title">
                                            {{ feedback.author }}
                                        </h3>
                                    </div>
                                </div>
                            </Slide>

                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Trans from "@/i18n/translation";
import Tr from "@/i18n/translation";

export default {
    name: "FeedbackSection",
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            Tr: Tr,
            feedbacks: [
                {
                    message: "Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service!Great service! Great service! Great service! Great service! Great service! Great service!",
                    author: "Alice",
                    avatar: 'https://placehold.co/900x600',
                    rate: 4,
                    id: 1
                },
                {
                    message: "Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service!Great service! Great service! Great service! Great service! Great service! Great service!",
                    author: "Alice",
                    avatar: 'https://placehold.co/900x600',
                    rate: 3,
                    id: 2
                }, {
                    message: "Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service!Great service! Great service! Great service! Great service! Great service! Great service!",
                    author: "Alice sdf sdf sd f",
                    avatar: 'https://placehold.co/900x600',
                    rate: 5,
                    id: 3
                }, {
                    message: "Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service!Great service! Great service! Great service! Great service! Great service! Great service!",
                    author: "Alice ewr",
                    avatar: 'https://placehold.co/900x600',
                    rate: 1,
                    id: 4
                }, {
                    message: "Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service! Great service!Great service! Great service! Great service! Great service! Great service! Great service!",
                    author: "Alice asdas",
                    avatar: 'https://placehold.co/900x600',
                    rate: 5,
                    id: 5
                },
            ],
        }
    },
    computed: {
        getSettings() {
            return {
                snapAlign: 'start',
                dir: Trans.currentLocale == 'ar' ? 'rlt' : 'ltr',
                // autoplay: 2000,
                wrapAround: true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.feedback {
    background-image: url('https://placehold.co/900x600');
    background-size: cover;

    &__boxes {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 768px) {
            align-items: center;
        }
    }

    &__main-title {
        font-size: 32px;
        font-weight: 400;
        line-height: 1;
        font-family: var(--secondary-font);
        color: var(--white-color);
        margin-bottom: 16px;
        text-align: center;
    }

    &__item {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 32px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 85%;
        position: relative;
        padding-bottom: 55px;

        @media (max-width:768px) {
            width: 100%;
        }
    }

    &__icon {
        font-size: 48px;
        color: var(--main-color);
    }

    &__text {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 0;
        color: var(--white-color);
        text-align: center;
    }

    &__rate {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 8px;
    }

    &__rate-icon {
        font-size: 16px;
        color: var(--main-color);
    }

    &__img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        color: var(--white-color);
        margin-bottom: 0;
    }

    &__widget {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        left: 50%;
        bottom: -20px;
        transform: translate(-50%, 50%);
    }
}

:deep {
    .carousel__viewport {
        padding-top: 10px;
    }

    .carousel__slide {
        margin-bottom: 80px;
    }
}
</style>
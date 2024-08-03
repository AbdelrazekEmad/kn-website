<template>
    <section class="teacher py-5">
        <div class="container">
            <SectionTitle title="OUR TEACHERS" color="#101010" />

            <Carousel v-bind="getSettings" :breakpoints="breakpoints">
                <Slide v-for="teacher in teachers" :key="teacher.id">
                    <div class="teacher__box">
                        <img class="teacher__img" :src="teacher.avatar" :alt="teacher.name" :title="teacher.name">

                        <h3 class="teacher__title">
                            {{ teacher.name }}
                        </h3>

                        <p class="teacher__text">
                            {{ teacher.text }}
                        </p>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Trans from "@/i18n/translation";

export default {
    name: "TeachersCards",
    components: {
        SectionTitle,
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            teachers: [
                {
                    id: 1,
                    name: 'lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    avatar: 'https://placehold.co/900x600'
                },
                {
                    id: 2,
                    name: 'lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    avatar: 'https://placehold.co/900x600'
                },
                {
                    id: 3,
                    name: 'lorem ipsum',
                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    avatar: 'https://placehold.co/900x600'
                },
                {
                    id: 4,
                    name: 'lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    avatar: 'https://placehold.co/900x600'
                },
            ],

            breakpoints: {
                // 700px and up
                768: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                991: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                }
            },
        }
    },
    computed: {
        getSettings() {
            return {
                snapAlign: 'start',
                dir: Trans.currentLocale == 'ar' ? 'rlt' : 'ltr',
                autoplay: 2000,
                wrapAround: true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.teacher {
    &__box {
        height: 100%;
        padding: 24px 32px;
        margin: 0px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transition: all 0.3s linear;

        &:hover {
            transform: scale(1.01);

            .teacher__title {
                color: var(--main-color);
            }
        }
    }

    &__img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 8px;
    }

    &__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 1;
        font-family: var(--secondary-font);
        color: var(--text-color);
        margin-bottom: 0;
        text-align: center;
    }

    &__text {
        font-size: 16px;
        margin-bottom: 0;
        color: var(--text-color);
        text-align: center;
    }
}

:deep {
    .carousel__viewport{
        padding: 10px 0;
    }
}
</style>
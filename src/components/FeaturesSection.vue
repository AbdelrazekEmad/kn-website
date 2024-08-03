<template>
    <section class="features py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="features__boxes">
                        <h2 class="features__main-title">
                            {{ $t('ABOUT.FEATURES_TITLE') }}
                        </h2>

                        <div class="features__box" v-for="feature in features" :key="feature.id">
                            <i class="features__icon" :class="feature.iconClass"></i>

                            <div class="features__content">
                                <h3 class="features__title">
                                    {{ feature.title }}
                                </h3>

                                <p class="features__text">
                                    {{ feature.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
    name: "FeaturesSection",
    data() {
        return {
            Tr: Tr,
            features: [
                {
                    id: 1,
                    title: 'Features 1',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem dignissimos, quam error rem eum ratione excepturi deleniti aliquam dolor ullam distinctio aspernatur odit, beatae hic iste fugit rerum minima.',
                    iconClass: 'fa-regular fa-clock'
                },
                {
                    id: 2,
                    title: 'Features 2',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem dignissimos, quam error rem eum ratione excepturi deleniti aliquam dolor ullam distinctio aspernatur odit, beatae hic iste fugit rerum minima.',
                    iconClass: 'fa-solid fa-book-quran'
                },
                {
                    id: 3,
                    title: 'Features 3',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem dignissimos, quam error rem eum ratione excepturi deleniti aliquam dolor ullam distinctio aspernatur odit, beatae hic iste fugit rerum minima.',
                    iconClass: 'fa-solid fa-certificate'
                },
                {
                    id: 4,
                    title: 'Features 4',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem dignissimos, quam error rem eum ratione excepturi deleniti aliquam dolor ullam distinctio aspernatur odit, beatae hic iste fugit rerum minima.',
                    iconClass: 'fa-solid fa-user-group'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.features {
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
        margin-bottom: 8px;
    }

    &__box {
        display: flex;
        gap: 16px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__icon {
        color: var(--main-color);
        font-size: 48px;

        &:hover {
            color: var(--dark-main-color);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 12px;

        @media (max-width: 768px) {
            align-items: center;
        }
    }

    &__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 1;
        font-family: var(--secondary-font);
        color: var(--main-color);
        margin-bottom: 0;
    }

    &__text {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 0;
        color: var(--white-color);

        @media (max-width: 768px) {
            text-align: center;
        }
    }
}
</style>
<template>
    <div class="slider-parent">
        <template v-for="(image, index) in images" :key="index">
            <transition name="fade">
                <img :src="image.src" :alt="image.alt" :title="image.alt" class="slider-parent__img"
                    v-if="index === currentSliderIndex" />
            </transition>
        </template>

        <div class="slider-parent__content">
            <h1 class="slider-parent__title">
                LEARN QURAN ONLINE
            </h1>

            <p class="slider-parent__text">
                Best Quran Tutors are a step away
            </p>

            <div class="slider-parent__buttons">
                <button class="slider-parent__button">
                    book free trial
                </button>

                <button class="slider-parent__button">
                    browse courses
                </button>
            </div>
        </div>
    </div>

    <div class="banner-features py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-12 col-lg-4 col-md-6" v-for="(feature, index) in features" :key="feature.id">
                    <div class="banner-features__box" :class="index == 1 ? 'banner-features__box_border' : ''">
                        <i class="banner-features__icon" :class="feature.iconClass"></i>

                        <div class="banner-features__content">
                            <h3 class="banner-features__title">
                                {{ feature.title }}
                            </h3>

                            <p class="banner-features__text">
                                {{ feature.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    src: "https://placehold.co/900x600",
                    alt: "Image 1",
                },
                {
                    src: "https://placehold.co/900x600",
                    alt: "Image 2",
                },
                {
                    src: "https://placehold.co/900x600",
                    alt: "Image 3",
                },
            ],
            intervalId: null,
            currentSliderIndex: 0,
            features: [
                {
                    id: 1,
                    title: '24/7 Online Classes',
                    text: 'Aenean vulputate eleifend tellus.',
                    iconClass: 'fa-regular fa-clock'
                },
                {
                    id: 2,
                    title: 'Free Trial Class',
                    text: 'Aenean vulputate eleifend tellus.',
                    iconClass: 'fa-solid fa-dollar-sign'
                },
                {
                    id: 3,
                    title: 'Completion Certificates',
                    text: 'Aenean vulputate eleifend tellus.',
                    iconClass: 'fa-solid fa-certificate'
                },
            ]
        };
    },
    methods: {
        startSlider() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        nextSlide() {
            this.currentSliderIndex = (this.currentSliderIndex + 1) % this.images.length;
        },
    },
    mounted() {
        this.startSlider();
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
};
</script>

<style lang="scss" scoped>
.slider-parent {
    height: calc(100vh - 164px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
        height: 100%;
        width: 100%;
        position: absolute;
        object-fit: cover;
        z-index: -1;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }

    &__title {
        font-size: 48px;
        font-weight: 400;
        font-family: var(--secondary-font);
        color: var(--secondary-color);
        text-align: center;
    }

    &__text {
        font-size: 24px;
        font-weight: 400;
        color: var(--text-color);
        text-align: center;
    }

    &__buttons {
        display: flex;
        gap: 16px;
    }

    &__button {
        background-color: var(--main-color);
        padding: 8px 16px;
        color: var(--white-color);
        border: 0;
        outline: 0;
        transition: all 0.2s linear;
        border-radius: 16px;
        text-transform: capitalize;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

        &:hover {
            background-color: var(--secondary-color);
        }

        &:last-of-type {
            background-color: var(--secondary-color);
        }

        &:last-of-type:hover {
            background-color: var(--main-color);

        }
    }
}

.banner-features {
    background-color: var(--secondary-color);

    &__box {
        display: flex;
        gap: 16px;
        height: 100%;
        justify-content: center;

        &_border {
            border: 1px solid var(--main-color);
            border-top: 0;
            border-bottom: 0;

            @media (max-width: 991px) {
                border: 0;
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__icon {
        color: var(--dark-main-color);
        font-size: 48px;
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
        color: var(--white-color);
        margin-bottom: 0;
    }

    &__text {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 0;
        color: var(--main-color);

        @media (max-width: 768px) {
            text-align: center;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(0);
}
</style>
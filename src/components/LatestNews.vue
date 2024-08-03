<template>
    <section class="news py-5">
        <div class="container">
            <SectionTitle title="LATEST NEWS" color="#101010" />

            <div class="row g-4">
                <div class="col-12 col-xl-4 col-md-6" v-for="news in newsList" :key="news.id">
                    <a href="blog-details" class="news__box">
                        <div class="news__img-container">
                            <img class="news__img" :src="news.avatar" :alt="news.name" :title="news.name">

                        </div>
                        <p class="news__tag">
                            {{ news.tag }}
                        </p>

                        <h3 class="news__title">
                            {{ news.name }}
                        </h3>

                        <p class="news__text">
                            {{ news.text }}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
    name: "LatestNews",
    components: {
        SectionTitle
    },
    data() {
        return {
            newsList: [
                {
                    id: 1,
                    name: 'lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    tag: 'lorem tag',
                    avatar: 'https://placehold.co/900x600'
                },
                {
                    id: 2,
                    name: 'lorem ipsum',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    tag: 'lorem tag',
                    avatar: 'https://placehold.co/900x600'
                },
                {
                    id: 3,
                    name: 'lorem ipsum',
                    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod',
                    tag: 'lorem tag',
                    avatar: 'https://placehold.co/900x600'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.news {
    &__box {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: all 0.3s linear;


        &:hover {
            .news__img {
                transform: rotate(2deg) scale(1.05);
            }
        }
    }

    &__img-container {
        width: 100%;
        height: 250px;
        overflow: hidden;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    &__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    &__tag {
        font-size: 14px;
        font-weight: 500;
        color: blue;
        margin-bottom: 0;
    }

    &__title {
        font-size: 24px;
        font-weight: 600;
        line-height: 1;
        color: var(--text-color);
        margin-bottom: 0;
    }

    &__text {
        font-size: 16px;
        margin-bottom: 0;
        color: var(--text-color);
    }
}
</style>
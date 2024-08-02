<template>
    <section class="teacher py-5">
        <div class="container">
            <SectionTitle title="OUR TEACHERS" color="#101010" />

            <div class="row g-4">
                <div class="col-12 col-xl-3 col-md-6" v-for="teacher in teachers" :key="teacher.id">
                    <div class="teacher__box">
                        <img class="teacher__img" :src="teacher.avatar" :alt="teacher.name" :title="teacher.name">

                        <h3 class="teacher__title">
                            {{ teacher.name }}
                        </h3>

                        <p class="teacher__text">
                            {{ teacher.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'

export default {
    name: "TeachersCards",
    components: {
        SectionTitle
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
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.teacher {
    &__box {
        height: 100%;
        padding: 24px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        border-radius: 8px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transition: all 0.3s linear;

        &:hover {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
</style>
<template>
    <section class="feedback py-5">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-12 col-lg-6">
                    <div class="feedback__boxes">
                        <h2 class="feedback__main-title">
                            Parent's Feedback
                        </h2>

                        <div class="feedback-slider">
                            <div class="feedback-container"
                                :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
                                <div class="feedback-item" v-for="(feedback, index) in feedbacks" :key="index">
                                    <p>{{ feedback.message }}</p>


                                    <div>
                                        {{ feedback.rate }}
                                    </div>

                                    <img :src="feedback.avatar" :alt="feedback.author" :title="feedback.author">

                                    <h3>
                                        {{ feedback.author }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FeedbackSection",
    data() {
        return {
            currentIndex: 0,
            feedbacks: [
                { message: "Great service!", author: "Alice", avatar: 'https://placehold.co/900x600', rate: 5, id: 1 },
                { message: "Loved the experience.", author: "Bob", avatar: 'https://placehold.co/900x600', rate: 4, id: 2 },
                { message: "Would recommend to others.", author: "Charlie", avatar: 'https://placehold.co/900x600', rate: 2, id: 3 },
                { message: "Would recommend to others.", author: "Charlie", avatar: 'https://placehold.co/900x600', rate: 2, id: 4 },
                { message: "Great service!", author: "Alice", avatar: 'https://placehold.co/900x600', rate: 5, id: 5 },
            ],
            intervalId: null,
        }
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        this.stopAutoSlide();
    },
    methods: {
        startAutoSlide() {
            this.intervalId = setInterval(this.nextSlide, 3000); // Slide every 3 seconds
        },
        stopAutoSlide() {
            clearInterval(this.intervalId);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
        },
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
        margin-bottom: 8px;
    }
}

.feedback-slider {
    max-width: 400px;
    overflow: hidden;
    position: relative;
    margin: auto;
}

.feedback-container {
    display: flex;
    transition: transform 0.5s ease;
}

.feedback-item {
    min-width: 100%;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
}

.feedback-item p {
    margin: 0;
}
</style>
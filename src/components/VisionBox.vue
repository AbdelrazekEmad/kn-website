<template>
    <div class="vision-box__box">
        <h2 class="vision-box__title">
            {{ title }}
        </h2>

        <p class="vision-box__text">
            {{ text }}
        </p>
    </div>
</template>

<script>

export default {
    name: "VisionBox",
    props: {

        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
.vision-box {
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
        margin-bottom: 0;
        color: var(--text-color);
    }
}
</style>
<template>
    <div class="main-title">
        <div class="main-title__line" :style="{ backgroundColor: color }"></div>
        <h2 class="main-title__text" :style="{ color: color }">
            {{ title }}
        </h2>
        <div class="main-title__line" :style="{ backgroundColor: color }"></div>
    </div>
</template>

<script>
export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.main-title {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 16px;

    &__line {
        height: 1px;
        flex-grow: 1;
    }

    &__text {
        font-size: 32px;
        font-weight: 400;
        line-height: 1;
        font-family: var(--secondary-font);
        flex-shrink: 0;
    }
}
</style>
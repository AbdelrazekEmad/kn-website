<template>
    <button @click="handelNavigation" class="main-button">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "MainButton",
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    methods: {
        handelNavigation() {
            this.router.push({ name: this.link })
        }
    }
}
</script>

<style lang="scss" scoped>
.main-button {
    background-color: var(--main-color);
    padding: 12px 24px;
    border-radius: 12px;
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
    color: var(--white-color);
    border: 0;
    outline: 0;
    line-height: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s linear;

    &:hover {
        color: var(--text-color);
        background-color: var(--dark-main-color);
    }
}
</style>
<template>
  <h1>categories</h1>

  <p>
    {{ getCategories }}
  </p>
</template>

<script>
import { useCategoriesStore } from '@/stores/categories.store'
import { mapState, mapActions } from 'pinia'
export default {
  name: 'CategoriesView',
  data() {
    return {
    }
  },
  computed: {
    ...mapState(useCategoriesStore, ['getCategories'])
  },
  async mounted() {
    await this.getAllCategories()
  },
  methods: {
    ...mapActions(useCategoriesStore, ['getAllCategories'])
  }
}
</script>

<style lang="scss" scoped></style>
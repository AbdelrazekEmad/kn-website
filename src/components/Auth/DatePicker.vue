<template>
  <div class="date-picker">
    <h3 class="date-picker__label">
      {{ label }}
    </h3>

    <div class="date-picker__container">
      <VueDatePicker v-model="date" :clearable="false" auto-apply @update:model-value="handleDateSelect" />

      <img class="date-picker__icon" src="@/assets/images/auth/icons/calender.svg" alt="calender">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    label: {
      type: String,
      Required: true,
      default: 'lorem label'
    },
  },
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    handleDateSelect() {
      this.$emit('selectedDate', this.date)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--dark-gray);
    margin: 0;
  }

  &__container {
    position: relative;
    block-size: 48px;
  }

  &__icon {
    position: absolute;
    inset-inline-end: 16px;
    inset-block-start: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
}


:deep {
  .dp__main {
    block-size: 100%;
  }

  .dp__input {
    inline-size: 100%;
    block-size: 48px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    background-color: var(--white-color);
    font-size: 16px;
    font-weight: 400;
    color: var(--dark-slate-gray);
    padding-inline-start: 16px;
  }

  .dp__input_icon {
    display: none;
  }
}
</style>
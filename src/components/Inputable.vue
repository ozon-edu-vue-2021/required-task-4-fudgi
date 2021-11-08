<template>
  <div class="element">
    <label v-if="label" :for="field">{{ label }}</label>
    <input
      v-bind="$props"
      :id="field"
      :name="field"
      @input="$emit('input', $event.target.value)"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => "",
    },
    field: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "",
    },
    list: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped>
.element {
  display: flex;
  flex-direction: column;
}
</style>

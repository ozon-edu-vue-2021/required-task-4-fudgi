<template>
  <div class="col">
    <label v-if="label" :for="field" class="form-label">{{ label }}</label>
    <input
      v-bind="$props"
      :id="field"
      :name="field"
      class="form-control"
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
      type: [String, Boolean],
      default: () => false,
    },
    pattern: {
      type: [String, Boolean],
      default: () => false,
    },
    max: {
      type: [String, Boolean],
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style scoped></style>

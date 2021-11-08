<template>
  <div>
    <p v-if="label">{{ label }}</p>
    <label v-for="option in options" :key="option.value">
      <input
        :type="type"
        :value="option.value"
        :name="field"
        @input="$emit('input', $event.target.value)"
      />
      {{ option.text }}
    </label>
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
    options: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style scoped></style>

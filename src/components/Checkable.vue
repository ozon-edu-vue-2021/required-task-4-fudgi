<template>
  <div>
    <p v-if="label" class="form-label">{{ label }}</p>

    <div
      v-for="option in options"
      :key="option.value"
      class="form-check form-check-inline"
    >
      <label class="form-check-label" :for="option.value">
        {{ option.text }}
      </label>
      <input
        :type="type"
        :value="option.value"
        :name="field"
        :id="option.value"
        :required="required"
        class="form-check-input"
        @input="$emit('input', $event.target.value)"
      />
    </div>
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
      default: () => "checkbox",
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>

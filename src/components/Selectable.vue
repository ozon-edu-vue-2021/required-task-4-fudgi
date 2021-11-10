<template>
  <div class="col">
    <label v-if="label" :for="field" class="form-label">
      {{ label }}
    </label>
    <div class="select" v-click-outside="handleClose">
      <input
        :id="field"
        :name="field"
        :value="searchText"
        :required="required"
        class="form-control input"
        autocomplete="off"
        @focus="handleOpen"
        @input="handleChange"
      />
      <button
        v-if="searchText.length"
        class="btn-close close"
        @click="clear"
      ></button>
      <div v-if="isOpened" class="wrapper overflow-auto">
        <ul v-if="filteredOptions.length" class="list">
          <li
            v-for="option in filteredOptions"
            :key="option"
            :class="selectedClasses(option)"
            @click="handleOptionClick(option)"
          >
            {{ option }}
          </li>
        </ul>
        <div v-else>Ничего не найдено</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isOpened: false,
      searchText: "",
    };
  },
  computed: {
    filteredOptions() {
      if (!this.searchText) return this.options;
      return this.options.filter((option) =>
        option.startsWith(this.searchText)
      );
    },
  },
  methods: {
    handleClose() {
      this.searchText = this.value;
      this.isOpened = false;
    },
    handleOpen() {
      this.isOpened = true;
    },
    handleOptionClick(newOption) {
      this.searchText = newOption;
      this.$emit("input", newOption);
      this.isOpened = false;
    },
    selectedClasses(option) {
      return ["list-item", { selected: this.value === option }];
    },
    handleChange(e) {
      this.searchText = e.target.value;
    },
    clear() {
      this.searchText = "";
      this.$emit("input", "");
    },
  },
  props: {
    label: {
      type: String,
      default: () => "",
    },
    field: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "",
    },
    autocomplete: {
      type: String,
      default: () => "",
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

<style scoped>
.select {
  position: relative;
}
.wrapper {
  z-index: 1;
  position: absolute;
  top: calc(100% + 5px);
  width: 100%;
  max-height: 200px;
  background-color: white;
  padding: 5px 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  filter: drop-shadow(2px 4px 6px #ced4da);
}
.input {
  padding-right: 60px;
  text-overflow: ellipsis;
}
.list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.list-item {
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 5px;
  line-height: 16px;
}
.selected {
  color: blueviolet;
}
.close {
  position: absolute;
  right: 30px;
  top: 7px;
}
</style>

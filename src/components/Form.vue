<template>
  <form :class="formClasses" ref="form">
    <fieldset class="mb-4">
      <legend class="mb-4">Личные данные</legend>
      <div class="row mb-3">
        <Inputable
          v-bind="fieldData[field.LAST_NAME]"
          v-model="formData[field.LAST_NAME]"
        />
        <Inputable
          v-bind="fieldData[field.FIRST_NAME]"
          v-model="formData[field.FIRST_NAME]"
        />

        <Inputable
          v-bind="fieldData[field.SECOND_NAME]"
          v-model="formData[field.SECOND_NAME]"
        />
      </div>

      <div class="row mb-3">
        <Inputable
          v-bind="fieldData[field.BIRTH_DATE]"
          v-model="formData[field.BIRTH_DATE]"
        />

        <Inputable
          v-bind="fieldData[field.EMAIL]"
          v-model="formData[field.EMAIL]"
        />
      </div>

      <Checkable v-bind="fieldData[field.SEX]" v-model="formData[field.SEX]" />
    </fieldset>

    <fieldset class="mb-5">
      <legend class="mb-4">Паспортные данные</legend>

      <div class="row mb-3">
        <Inputable
          v-bind="fieldData[field.CITIZENSHIP]"
          v-model="formData[field.CITIZENSHIP]"
        >
          <datalist id="citizenships">
            <option v-for="item in citizenships" :value="item" :key="item" />
          </datalist>
        </Inputable>
      </div>

      <div v-if="isRussian" class="row mb-3">
        <Inputable
          v-bind="fieldData[field.PASSPORT_SERIES]"
          v-model="formData[field.PASSPORT_SERIES]"
        />
        <Inputable
          v-bind="fieldData[field.PASSPORT_NUMBER]"
          v-model="formData[field.PASSPORT_NUMBER]"
        />
        <Inputable
          v-bind="fieldData[field.PASSPORT_DATE]"
          v-model="formData[field.PASSPORT_DATE]"
        />
      </div>

      <div v-else-if="isForeign" class="foreign">
        <div class="row mb-1">
          <Inputable
            v-bind="fieldData[field.FOREIGN_LAST_NAME]"
            v-model="formData[field.FOREIGN_LAST_NAME]"
          />
          <Inputable
            v-bind="fieldData[field.FOREIGN_FIRST_NAME]"
            v-model="formData[field.FOREIGN_FIRST_NAME]"
          />
        </div>
        <span class="d-block mb-3 small-text">
          Иностранцы заполняют литинскими буквами. Например, Ivanov Ivan
        </span>
        <div class="row mb-3">
          <Inputable
            v-bind="fieldData[field.FOREIGN_PASSPORT_NUMBER]"
            v-model="formData[field.FOREIGN_PASSPORT_NUMBER]"
          />
          <Inputable
            v-bind="fieldData[field.FOREIGN_COUNTRY_ORIGIN]"
            v-model="formData[field.FOREIGN_COUNTRY_ORIGIN]"
          >
            <datalist id="countries">
              <option v-for="item in citizenships" :value="item" :key="item" />
            </datalist>
          </Inputable>
          <Inputable
            v-bind="fieldData[field.FOREIGN_PASSPORT_TYPE]"
            v-model="formData[field.FOREIGN_PASSPORT_TYPE]"
          >
            <datalist id="passportTypes">
              <option v-for="item in passportTypes" :value="item" :key="item" />
            </datalist>
          </Inputable>
        </div>
      </div>

      <Checkable
        v-bind="fieldData[field.LAST_NAME_CHANGED]"
        v-model="formData[field.LAST_NAME_CHANGED]"
      />

      <div v-if="isLastNameChanged" class="row">
        <Inputable
          v-bind="fieldData[field.PREVIOUS_LAST_NAME]"
          v-model="formData[field.PREVIOUS_LAST_NAME]"
        />
        <Inputable
          v-bind="fieldData[field.PREVIOUS_FIRST_NAME]"
          v-model="formData[field.PREVIOUS_FIRST_NAME]"
        />
      </div>
    </fieldset>
    <button type="submit" class="btn btn-primary" @click="sendForm">
      Отправить
    </button>
  </form>
</template>

<script>
import Inputable from "@/components/Inputable";
import Checkable from "@/components/Checkable";
import citizenshipData from "@/assets/data/citizenships.json";
import passportTypesData from "@/assets/data/passport-types.json";
import { field, fieldData, initFormData } from "@/assets/data/field-config.js";
const CITIZENSHIP_RUSSIA = "Russia";
const CHANGE_NAME_YES = "yes";

const citizenships = Array.from(
  new Set(citizenshipData.map(({ nationality }) => nationality))
);

const passportTypes = passportTypesData.map(({ type }) => type);

export default {
  components: {
    Inputable,
    Checkable,
  },
  data() {
    return {
      formData: initFormData,
      citizenships,
      passportTypes,
      fieldData,
      field,
      isValidForm: true,
    };
  },
  methods: {
    sendForm(event) {
      event.preventDefault();
      event.stopPropagation();

      if (!this.$refs.form.checkValidity()) this.isValidForm = false;
      else this.isValidForm = true;
      console.log(this.isValidForm);

      console.log(JSON.stringify(this.formData, null, 4));
    },
  },
  computed: {
    isRussian() {
      return this.formData[field.CITIZENSHIP] === CITIZENSHIP_RUSSIA;
    },
    isForeign() {
      return (
        this.formData[field.CITIZENSHIP] &&
        this.formData[field.CITIZENSHIP] !== CITIZENSHIP_RUSSIA
      );
    },
    isLastNameChanged() {
      return this.formData[field.LAST_NAME_CHANGED] === CHANGE_NAME_YES;
    },
    formClasses() {
      return ["form", { "was-validated": !this.isValidForm }];
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 700px;
}
.small-text {
  font-size: 14px;
}
</style>

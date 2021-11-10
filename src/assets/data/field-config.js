import getFormatedCurrentDate from "@/utils/getFormatedCurrentDate";
import * as regexp from "./regex";

const field = {
  LAST_NAME: "lastName",
  FIRST_NAME: "firstName",
  SECOND_NAME: "secondName",
  BIRTH_DATE: "birthDate",
  EMAIL: "email",
  SEX: "sex",
  CITIZENSHIP: "citizenship",
  //RUSSIAN
  PASSPORT_SERIES: "passport_series",
  PASSPORT_NUMBER: "passport_number",
  PASSPORT_DATE: "passport_date",
  //FOREIGN
  FOREIGN_LAST_NAME: "foreignLastName",
  FOREIGN_FIRST_NAME: "foreignFirstName",
  FOREIGN_PASSPORT_NUMBER: "foreignPassportNumber",
  FOREIGN_COUNTRY_ORIGIN: "foreignCountryOrigin",
  FOREIGN_PASSPORT_TYPE: "foreignPassportType",
  //ADDITIONAL
  LAST_NAME_CHANGED: "lastNameChanged",
  PREVIOUS_LAST_NAME: "previousLastName",
  PREVIOUS_FIRST_NAME: "previousFirstName",
};

const russianTextField = {
  type: "text",
  required: true,
  pattern: regexp.RUSSIAN_LETTERS_PATTERN,
};

const foreignTextField = {
  type: "text",
  required: true,
  pattern: regexp.FOREIGN_LETTER_PATTERN,
};

const dateField = {
  type: "date",
  required: true,
  max: getFormatedCurrentDate(),
};

const fieldData = {
  [field.LAST_NAME]: {
    ...russianTextField,
    label: "Фамилия",
    field: field.LAST_NAME,
  },
  [field.FIRST_NAME]: {
    ...russianTextField,
    label: "Имя",
    field: field.FIRST_NAME,
  },
  [field.SECOND_NAME]: {
    ...russianTextField,
    label: "Отчество",
    field: field.SECOND_NAME,
  },
  [field.BIRTH_DATE]: {
    ...dateField,
    label: "Дата рождения",
    field: field.BIRTH_DATE,
  },
  [field.EMAIL]: {
    type: "email",
    label: "E-mail",
    required: true,
    pattern: regexp.EMAIL_PATTERN,
    field: field.EMAIL,
  },
  [field.SEX]: {
    type: "radio",
    label: "Пол",
    field: field.SEX,
    required: true,
    options: [
      { value: "male", text: "Мужской" },
      { value: "female", text: "Женский" },
    ],
  },
  [field.CITIZENSHIP]: {
    type: "",
    label: "Гражданство",
    required: true,
    field: field.CITIZENSHIP,
  },
  //RUSSIAN
  [field.PASSPORT_SERIES]: {
    type: "text",
    label: "Серия паспорта",
    required: true,
    pattern: regexp.PASSPORT_SERIES_PATTERN,
    field: field.PASSPORT_SERIES,
  },
  [field.PASSPORT_NUMBER]: {
    type: "text",
    label: "Номер паспорта",
    required: true,
    pattern: regexp.RUSSIAN_PASSPORT_NUMBER_PATTERN,
    field: field.PASSPORT_NUMBER,
  },
  [field.PASSPORT_DATE]: {
    ...dateField,
    label: "Дата выдачи",
    field: field.PASSPORT_DATE,
  },
  //FOREIGN
  [field.FOREIGN_LAST_NAME]: {
    ...foreignTextField,
    label: "Фамилия на латинице",
    field: field.FOREIGN_LAST_NAME,
  },
  [field.FOREIGN_FIRST_NAME]: {
    ...foreignTextField,
    label: "Имя на латинице",
    field: field.FOREIGN_FIRST_NAME,
  },
  [field.FOREIGN_PASSPORT_NUMBER]: {
    type: "number",
    label: "Номер паспорта",
    required: true,
    pattern: regexp.FOREIGN_PASSPORT_NUMBER_PATTERN,
    field: field.FOREIGN_PASSPORT_NUMBER,
  },
  [field.FOREIGN_COUNTRY_ORIGIN]: {
    type: "",
    label: "Страна выдачи",
    list: "countries",
    required: true,
    field: field.FOREIGN_COUNTRY_ORIGIN,
    options: [],
  },
  [field.FOREIGN_PASSPORT_TYPE]: {
    type: "",
    label: "Тип паспорта",
    list: "passportTypes",
    required: true,
    field: field.FOREIGN_PASSPORT_TYPE,
    options: [],
  },
  //ADDITIONAL
  [field.LAST_NAME_CHANGED]: {
    type: "radio",
    label: "Меняли ли фамилию или имя?",
    field: field.LAST_NAME_CHANGED,
    required: true,
    options: [
      { value: "yes", text: "Да" },
      { value: "no", text: "Нет" },
    ],
  },
  [field.PREVIOUS_LAST_NAME]: {
    ...russianTextField,
    label: "Предыдущая фамилия",
    field: field.PREVIOUS_LAST_NAME,
  },
  [field.PREVIOUS_FIRST_NAME]: {
    ...russianTextField,
    label: "Предыдущее имя",
    field: field.PREVIOUS_FIRST_NAME,
  },
};

const initFormData = Object.keys(fieldData).reduce((acc, key) => {
  acc[key] = "";
  return acc;
}, {});

export { field, fieldData, initFormData };

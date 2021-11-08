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
  //NOT_RUSSIAN
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

const fieldData = {
  [field.LAST_NAME]: {
    type: "text",
    label: "Фамилия",
    field: field.LAST_NAME,
  },
  [field.FIRST_NAME]: {
    type: "text",
    label: "Имя",
    field: field.FIRST_NAME,
  },
  [field.SECOND_NAME]: {
    type: "text",
    label: "Отчество",
    field: field.SECOND_NAME,
  },
  [field.BIRTH_DATE]: {
    type: "date",
    label: "Дата рождения",
    field: field.BIRTH_DATE,
  },
  [field.EMAIL]: {
    type: "email",
    label: "E-mail",
    field: field.EMAIL,
  },
  [field.SEX]: {
    type: "radio",
    label: "Пол",
    field: field.SEX,
    options: [
      { value: "male", text: "Мужской" },
      { value: "female", text: "Женский" },
    ],
  },
  [field.CITIZENSHIP]: {
    type: "",
    label: "Гражданство",
    list: "citizenships",
    field: field.CITIZENSHIP,
    options: [],
  },
  //RUSSIAN
  [field.PASSPORT_SERIES]: {
    type: "number",
    label: "Серия паспорта",
    field: field.PASSPORT_SERIES,
  },
  [field.PASSPORT_NUMBER]: {
    type: "number",
    label: "Номер паспорта",
    field: field.PASSPORT_NUMBER,
  },
  [field.PASSPORT_DATE]: {
    type: "date",
    label: "Дата выдачи",
    field: field.PASSPORT_DATE,
  },
  //NOT_RUSSIAN
  [field.FOREIGN_LAST_NAME]: {
    type: "text",
    label: "Фамилия на латиниц",
    field: field.FOREIGN_LAST_NAME,
  },
  [field.FOREIGN_FIRST_NAME]: {
    type: "text",
    label: "Имя на латинице",
    field: field.FOREIGN_FIRST_NAME,
  },
  [field.FOREIGN_PASSPORT_NUMBER]: {
    type: "number",
    label: "Номер паспорта",
    field: field.FOREIGN_PASSPORT_NUMBER,
  },
  [field.FOREIGN_COUNTRY_ORIGIN]: {
    type: "",
    label: "Страна выдачи",
    list: "countries",
    field: field.FOREIGN_COUNTRY_ORIGIN,
    options: [],
  },
  [field.FOREIGN_PASSPORT_TYPE]: {
    type: "",
    label: "Тип паспорта",
    list: "passportTypes",
    field: field.FOREIGN_PASSPORT_TYPE,
    options: [],
  },
  //ADDITIONAL
  [field.LAST_NAME_CHANGED]: {
    type: "radio",
    label: "Меняли ли фамилию или имя?",
    field: field.LAST_NAME_CHANGED,
    options: [
      { value: "yes", text: "Да" },
      { value: "no", text: "Нет" },
    ],
  },
  [field.PREVIOUS_LAST_NAME]: {
    type: "text",
    label: "Предыдущая фамилия",
    field: field.PREVIOUS_LAST_NAME,
  },
  [field.PREVIOUS_FIRST_NAME]: {
    type: "text",
    label: "Предыдущее имя",
    field: field.PREVIOUS_FIRST_NAME,
  },
};

const initFormData = {
  [field.LAST_NAME]: "",
  [field.FIRST_NAME]: "",
  [field.SECOND_NAME]: "",
  [field.BIRTH_DATE]: "",
  [field.EMAIL]: "",
  [field.SEX]: "",
  [field.CITIZENSHIP]: "",
  //RUSSIAN
  [field.PASSPORT_SERIES]: "",
  [field.PASSPORT_NUMBER]: "",
  [field.PASSPORT_DATE]: "",
  //NOT_RUSSIAN
  [field.FOREIGN_LAST_NAME]: "",
  [field.FOREIGN_FIRST_NAME]: "",
  [field.FOREIGN_PASSPORT_NUMBER]: "",
  [field.FOREIGN_COUNTRY_ORIGIN]: "",
  [field.FOREIGN_PASSPORT_TYPE]: "",
  //ADDITIONAL
  [field.LAST_NAME_CHANGED]: "",
  [field.PREVIOUS_LAST_NAME]: "",
  [field.PREVIOUS_FIRST_NAME]: "",
};

export { field, fieldData, initFormData };

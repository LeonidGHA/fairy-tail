export const fieldsParams = {
  name: {
    required: "обязательное поле",
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "Проверьте правильность ввода",
    },
    minLength: {
      value: 2,
      message: "минимальное кол-во букв 2",
    },
    maxLength: {
      value: 10,
      message: "максимальное кол-во букв 10",
    },
  },

  phone: {
    required: "обязательное поле",
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "Проверьте правильность ввода",
    },
    minLength: {
      value: 5,
      message: "минимальное кол-во цифр 5",
    },
    maxLength: {
      value: 10,
      message: "максимальное кол-во цифр 10",
    },

    email: {
      required: "обязательное поле",
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Проверьте правильность ввода",
      },
      minLength: {
        value: 2,
        message: "минимальное длина 5",
      },
      maxLength: {
        value: 10,
        message: "максимальное длина 10",
      },
    },
  },
};

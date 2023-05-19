import { useForm, SubmitHandler } from "react-hook-form";

import CustomInput from "@/shared/CustomInput/CustomInput";

import { fieldsParams } from "./fieldsSample";

interface IFormInput {
  name: String;
  phone: number | null;
  email: string;
  agreement: boolean;
}

const initialState: IFormInput = {
  name: "",
  phone: null,
  email: "",
  agreement: false,
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isValidating },
  } = useForm<IFormInput>({ defaultValues: initialState, mode: "onChange" });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  items-center p-10"
    >
      <CustomInput
        register={register("name", { ...fieldsParams.name })}
        classNameLabel={
          "flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        }
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Вашe Имя"
        classNameError="absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.name?.message}
      />
      {/* <label className="flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] ">
        <input
          {...register("name", {
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
          })}
          placeholder="Ваш телефон"
          className="border-2 p-2  rounded-xl w-full max-w-[500px]"
        />
        {errors.name ? (
          <span className="absolute bottom-0 inset-x-0 text-center">
            {errors.name.message}
          </span>
        ) : null}
      </label>

      <label className="flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px]">
        <input
          {...register("phone", {
            required: true,
            maxLength: 11,
          })}
          placeholder="Ваш телефон"
          className="border-2 p-2 rounded-xl w-full max-w-[500px] "
        />
        {errors.phone ? (
          <span className="absolute bottom-0 inset-x-0 text-center">
            Проверьте правильность ввода
          </span>
        ) : null}
      </label>

      <label className="flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px]">
        <input
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          placeholder="Ваша почта"
          className="border-2 p-2 rounded-xl w-full max-w-[500px] required:border-red-500 "
        />
        {errors.email ? (
          <span className="absolute  bottom-0 inset-x-0 text-center">
            Проверьте правильность ввода
          </span>
        ) : null}
      </label>

      <label className="flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] ">
        <input
          {...register("agreement", { required: true })}
          type="checkbox"
          className=""
        />
        {errors.agreement ? (
          <span className="absolute  bottom-0 inset-x-0 text-center">
            Подтвердите соглашение
          </span>
        ) : null}
      </label> */}

      <button type="submit" className="border-5">
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;

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
        type="text"
        classNameLabel={
          "flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        }
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Вашe Имя"
        classNameError="absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.name?.message}
      />

      <CustomInput
        register={register("phone", { ...fieldsParams.phone })}
        type="tel"
        classNameLabel={
          "flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        }
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Ваш Телефон"
        classNameError="absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.phone?.message}
      />

      <CustomInput
        register={register("email", { ...fieldsParams.email })}
        type="email"
        classNameLabel={
          "flex flex-col relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        }
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Ваша Почта"
        classNameError="absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.email?.message}
      />

      <CustomInput
        register={register("agreement", { ...fieldsParams.agreement })}
        type="checkbox"
        classNameLabel={
          "flex items-center justify-center relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        }
        classNameInput="mr-2"
        classNameError="absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.agreement?.message}
      >
        <span>
          Соглашаюсь с рассылкой и принимаю <span>Условия договора</span>
        </span>
      </CustomInput>

      <button type="submit" className="border-5">
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import CustomInput from "@/shared/CustomInput/CustomInput";

import { IFormInput } from "./ContactFormModels";
import { fieldsParams } from "./fieldsSample";

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
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormInput>({ defaultValues: initialState, mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    Notify.success(`Спасибо ${data.name}. Ваши данные были отправлены успешно`);
    reset();
  };

  useEffect(() => {
    if (isSubmitting && !isValid) {
      Notify.warning("Проверьте правильность заполнения полей");
    }
  }, [isSubmitting, isValid]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  items-center tablet:p-10"
    >
      <CustomInput
        register={register("name", { ...fieldsParams.name })}
        type="text"
        classNameLabel="flex flex-col bg-slate-200 bg-opacity-40 relative mb-4 border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Вашe Имя"
        classNameError="text-red-600 absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.name?.message}
      />

      <CustomInput
        register={register("phone", { ...fieldsParams.phone })}
        type="tel"
        classNameLabel="flex flex-col bg-slate-200 bg-opacity-40 relative mb-4 border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        classNameInput=" border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Ваш Телефон"
        classNameError="text-red-600 absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.phone?.message}
      />

      <CustomInput
        register={register("email", { ...fieldsParams.email })}
        type="email"
        classNameLabel="flex flex-col bg-slate-200 bg-opacity-40 relative mb-4 border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        classNameInput="border-2 p-2  rounded-xl w-full max-w-[500px]"
        placeholder="Ваша Почта"
        classNameError="text-red-600 text-red-600 absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.email?.message}
      />

      <CustomInput
        register={register("agreement", { ...fieldsParams.agreement })}
        type="checkbox"
        classNameLabel="flex bg-slate-200 bg-opacity-40 mb-4 items-center justify-center relative border-2 p-2 pb-6 rounded-xl w-full max-w-[500px] "
        classNameInput="mr-2"
        classNameError="text-red-600 absolute bottom-0 inset-x-0 text-center"
        errorMessage={errors.agreement?.message}
      >
        <span>
          Соглашаюсь с рассылкой и принимаю{" "}
          <span className=" text-blue-600 underline ">Условия договора</span>
        </span>
      </CustomInput>

      <button
        type="submit"
        className="border-5 rounded-xl border-2 bg-slate-200 bg-opacity-40  p-2 text-white transition-all hover:scale-[1.1] hover:border-opacity-75  hover:bg-neutral-400 hover:bg-opacity-10 hover:shadow-lg hover:shadow-slate-500"
      >
        Отправить
      </button>
    </form>
  );
};

export default ContactForm;

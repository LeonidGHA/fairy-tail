import Link from "next/link";

import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import SimpleHeader from "@/components/layout/SimpleHeader/SimpleHeader";
import ContactForm from "@/components/Forms/ContactForm/ContactForm";

import css from "./ContactPage.module.css";

const metaProps = [{ name: `контакты`, content: `ваша контактная информация` }];

const ContactPage = () => {
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <SimpleHeader />
      <main className="flex flex-grow  ">
        <section className={css.contact}>
          <div className="container mx-auto flex flex-col items-center px-6 tablet:px-16 desktop:px-20 ">
            <Link
              href="/"
              className="absolute left-5 top-5 rounded-lg  border-2 border-neutral-200 bg-transparent text-neutral-400 transition-all hover:scale-[1.1] hover:border-opacity-75 hover:bg-neutral-400 hover:bg-opacity-10  hover:shadow-lg hover:shadow-slate-500 mobile:p-2 mobile:text-sm tablet:left-10 tablet:top-5 tablet:p-4"
            >
              Назад
            </Link>
            <h1 className="mb-8 text-center font-[Comforter] text-7xl text-white">
              Оставьте вашу информацию
            </h1>
            <ContactForm />
          </div>
        </section>
      </main>
    </BodyContentWrapper>
  );
};

export default ContactPage;

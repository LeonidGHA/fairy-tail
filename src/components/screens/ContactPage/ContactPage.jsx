import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import SimpleHeader from "@/components/layout/SimpleHeader/SimpleHeader";
import ContactForm from "@/components/Forms/ContactForm/ContactForm";

import css from "./ContactPage.module.css";

const metaProps = [{ name: `contact`, content: `your contact information ` }];

const ContactPage = () => {
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <SimpleHeader />
      <main className="flex flex-grow  ">
        <section className={css.contact}>
          <div className="container mx-auto flex flex-col items-center px-6 tablet:px-16 desktop:px-20 ">
            <h1 className="text-center font-[Comforter] text-7xl text-white">
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

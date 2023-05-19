import BodyContentWrapper from "@/helpers/BodyContentWrapper/BodyContentWrapper";
import HeadLayout from "@/components/layout/HeadLayout/HeadLayout";
import SimpleHeader from "@/components/layout/SimpleHeader/SimpleHeader";
import ContactForm from "@/components/Forms/ContactForm/ContactForm";

const metaProps = [{ name: `contact`, content: `your contact information ` }];

const Contact = () => {
  return (
    <BodyContentWrapper>
      <HeadLayout metaProps={metaProps} />
      <SimpleHeader />
      <main className="flex-grow ">
        <section className=" py-20 ">
          <div className="container mx-auto px-20  ">
            <h1 className="text-center font-[Comforter] text-7xl">
              Оставьте вашу информацию
            </h1>
            <ContactForm />
          </div>
        </section>
      </main>
    </BodyContentWrapper>
  );
};

export default Contact;

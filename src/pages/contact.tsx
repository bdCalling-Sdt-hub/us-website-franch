import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Contact/Banner";
import ContactForm from "@/components/UI/Contact/ContactForm";
import ContactType from "@/components/UI/Contact/ContactType";
import BreadCrumb from "@/components/util/BreadCrumb";
import { ReactElement } from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Contact" />
        <Banner />
        <ContactType />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

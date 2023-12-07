import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Television/Banner";
import Offer from "@/components/UI/Television/Offer";
import TabSection from "@/components/UI/Television/TabSection";
import TvPackage from "@/components/UI/Television/TvPackage";
import BreadCrumb from "@/components/util/BreadCrumb";
import { ReactElement } from "react";

const TelevisionPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-6 lg:mx-28">
        <BreadCrumb title="Television" />
        <Banner />
        <TvPackage />
        <Offer />
        <TabSection />
      </div>
    </div>
  );
};

export default TelevisionPage;

TelevisionPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

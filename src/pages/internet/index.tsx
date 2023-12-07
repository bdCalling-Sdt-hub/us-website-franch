import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Internet/Banner";
import Service from "@/components/UI/Internet/Service";
import TabSection from "@/components/UI/Internet/TabSection";
import BreadCrumb from "@/components/util/BreadCrumb";
import { ReactElement } from "react";

const InternetHomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-6 lg:mx-28">
        <BreadCrumb title="Internet" />
        <Banner />
        <Service />
        <TabSection />
      </div>
    </div>
  );
};

export default InternetHomePage;

InternetHomePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

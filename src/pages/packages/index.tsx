import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Packages/Banner";
import PackageCard from "@/components/UI/Packages/PackageCard";
import BreadCrumb from "@/components/util/BreadCrumb";
import PackageTitle from "@/components/util/PackageTitle";
import Image from "next/image";
import { ReactElement, useState } from "react";
import packageList from "../../../public/db/packages.json";

const PackagesPage = () => {
  const [title, setTitle] = useState("tv-internet");
  const { packages } = packageList;
  const imgUrl =
    title === "tv-internet"
      ? "/images/pakTv.png"
      : title === "internet-phone"
      ? "/images/pakLap.png"
      : "/images/pakTv.png";

  const filterPackage = packages.filter((item) => item.category === title);

  return (
    <div className="container mx-auto">
      <div className="mx-6 lg:mx-28">
        <BreadCrumb title="Packages" />
        <Banner />
        <div
          role="tablist"
          className="tabs tabs-boxed text-white tabs-sm lg:tabs-lg my-10 bg-[#191e24]"
        >
          <button
            role="tab"
            onClick={() => setTitle("tv-internet")}
            className={`tab ${
              title === "tv-internet" ? "bg-[#1775fa] text-white" : ""
            }`}
          >
            TV + Internet
          </button>
          <button
            role="tab"
            onClick={() => setTitle("internet-phone")}
            className={`tab ${
              title === "internet-phone" ? "bg-[#1775fa] text-white" : ""
            }`}
          >
           Internet + Téléphone
          </button>
          <button
            role="tab"
            onClick={() => setTitle("tv-internet-phone")}
            className={`tab ${
              title === "tv-internet-phone" ? "bg-[#1775fa] text-white" : ""
            }`}
          >
      tv-internet-téléphone
          </button>
        </div>

        {title === "tv-internet" && (
          <PackageTitle
            title="Forfaits de télévision HD avec Internet illimité
            "
            description="Choissisez parmi nos meilleurs forfaits jumellant le service d'Internet et télévision.

            "
          />
        )}
        {title === "internet-phone" && (
          <PackageTitle
            title="Forfaits d'Internet illimité et téléphonie locale et CANADA / USA
            "
            description="Choissisez parmi nos meilleurs forfaits jumellant le service d'Internet et téléphone.

            "
          />
        )}
        {title === "tv-internet-phone" && (
          <PackageTitle
            title="Forfaits de télévision HD, Internet illimité et téléphonie locale et CANADA / USA"
            description="Choissisez parmi nos meilleurs forfaits jumellant le service de ​télévision, Internet et téléphone.

            "
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              {filterPackage.map((packageItem, index) => (
                <PackageCard key={index} packageItem={packageItem} />
              ))}
            </div>
          </div>
          <div className="mt-10 order-1 lg:order-2">
            <Image width={500} height={500} src={imgUrl} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;

PackagesPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

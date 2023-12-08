import RootLayout from "@/components/Layouts/RootLayout";
import BannerDetail from "@/components/UI/InternetDetail/BannerDetail";
import BreadCrumb from "@/components/util/BreadCrumb";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import internetList from "../../../public/db/internet.json";

const InternetDetail = () => {
  const { internetServices } = internetList;
  const router = useRouter();
  const id = router.query.id;
  const findInternet = internetServices.find(
    (server) => server.id.toString() === id
  );

  const items = [
    {
      title: "Motorola SurfBoard (Modem)",
      description:
        "The Motorola SurfBoard modem has the ability to receive the signal from the cable network and maintain a stable connection. All you have to do is connect it to your router and let it do its job without worrying.",
    },
    {
      title: "Zisa V800VWL (Router)",
      description:
        "For high Wi-Fi performance in your home, the Zisa router is at your disposal! Including a phone adapter, this multi-use device is everything you're looking for for the best wireless network in your home.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Internet Detail" />
        <BannerDetail data={findInternet} />
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-body grid grid-cols-1 lg:grid-cols-2 border border-[#818181] rounded m-2"
            >
              <div>
                <h1 className="text-3xl font-medium">{item.title}</h1>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="place-self-end">
                <h1 className="text-3xl font-medium my-3 text-center">
                  Included!
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="card bg-gray-800 text-gray-400  mt-5 my-14 p-5">
          <div>
            <h1 className="text-3xl font-medium">Offer details</h1>
            <p className="text-lg">
              *The purchase or rental of a modem is required in order to use
              Vodalink Internet services. An initial fee of $65 for installation
              and $25 for activation may apply for new Internet service
              installations. An installation fee of $99 is applicable in the
              event of reconnection or moving. Internet speed may vary depending
              on the level of activity, the configuration of your devices, the
              servers hosting the website visited, Internet traffic or random
              events. Usage is subject to Vodalink fair use policy. Taxes are
              not included in the prices presented. Terms and Conditions apply.
              ** Any discounts or promotions may vary depending on the
              geographic location where the services are ordered. The discount
              may be withheld if the customer moves outside the geographic area
              where the discounts apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetDetail;

InternetDetail.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

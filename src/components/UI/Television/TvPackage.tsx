import HeaderText from "@/components/util/HeaderText";
import packageList from "../.../../../../../public/db/tv.json";
import TvPackageCard from "./TvPackageCard";

const TvPackage = () => {
  const { tvPackageList } = packageList;
  return (
    <div>
      <HeaderText>
      Les forfaits télé les plus <span className="text-[#1775fa]">fresh</span>  {" "}
        <br /> du marché{" "}
      </HeaderText>
      <div className="grid grid-cols-1 gap-1 mb-14">
        {tvPackageList.map((item, index) => (
          <TvPackageCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TvPackage;

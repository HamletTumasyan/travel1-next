import PackagesHero from "@/components/packages/PackagesHero";
import PackagesContent1 from "@/components/packages/PackagesContent1";
import PackagesContent2 from "@/components/packages/PackagesContent2";
import PackagesDetails from "@/components/packages/PackagesDetails";
import Lang from "@/lib/lang"
import axios from "@/lib/api";


export default async function PackagesPage() {
  const lang = await Lang();
  const resHero = (await axios.get(`packages_hero?lang=${lang}`)).data[0];
  const resContent1 = (await axios.get(`packages_content1?lang=${lang}`)).data;
  const resContent2 = (await axios.get(`packages_content2?lang=${lang}`)).data;
  const resDetails = (await axios.get(`packages_details?lang=${lang}`)).data[0];

  return (
    <div>
      <div>
        <PackagesHero data={resHero} />
        <PackagesContent1 data={resContent1} />
        <PackagesDetails data={resDetails} />
        <PackagesContent2 data={resContent2} />
      </div>
    </div>
  )
}

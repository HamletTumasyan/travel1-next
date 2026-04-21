import HomeSlider from "@/components/homepage/HomeSlider";
import HomePackages from "@/components/homepage/HomePackages";
import HomeDetails from "@/components/homepage/HomeDetails";
import HomeGallery from "@/components/homepage/HomeGallery";
import Lang from "@/lib/lang";
import axios from "@/lib/api";

export default async function HomePage() {
  const lang = await Lang();

  const resSlider = (await axios.get(`homepage_slider?lang=${lang}`)).data;
  const resPackagesHeading = (await axios.get(`homepage_package_heading?lang=${lang}`)).data[0].title;
  const resPackages = (await axios.get(`homepage_packages?lang=${lang}`)).data;
  const resDetails = (await axios.get(`homepage_details?lang=${lang}`)).data[0];
  const resGalleryHeading = (await axios.get(`homepage_gallery_heading?lang=${lang}`)).data[0]?.title;
  const resGallery = (await axios.get(`homepage_gallery?lang=${lang}`)).data;

  return (
    <div>
      <HomeSlider data={resSlider}/>
      <HomePackages data={resPackages} title={resPackagesHeading}/>
      <HomeDetails data={resDetails}/>
      <HomeGallery  data={resGallery} title={resGalleryHeading}/>
    </div>
  )
}
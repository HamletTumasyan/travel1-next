import Packages from '@/components/services/ServicesPackages';
import PackagesInfo from '@/components/services/ServicesGroup';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesDetails from '@/components/services/ServicesDetails';
import Lang from '@/lib/lang';
import axios from '@/lib/api';

export default async function Services() {

  const lang = await Lang();

  const resHero = (await axios.get(`services_hero?lang=${lang}`)).data[0];
  const resGroup = (await axios.get(`services_group_section?lang=${lang}`)).data[0];
  const resDetails = (await axios.get(`services_details?lang=${lang}`)).data[0];
  const resPackagesHeading = (await axios.get(`services_packages_heading?lang=${lang}`)).data[0];
  const resPackages = (await axios.get(`services_packages?lang=${lang}`)).data;


   return (
    <div className='Services'>
      <ServicesHero hero={resHero}/>
      <PackagesInfo group={resGroup}/>
      <ServicesDetails details={resDetails}/>
      <Packages heading={resPackagesHeading} packages={resPackages} />
    </div>
  );
}
import AboutTeam from '@/components/about/AboutTeam';
import AboutGroup from '@/components/about/AboutGroup';
import Lang from '@/lib/lang';
import axios from '@/lib/api';
import AboutHero from '@/components/about/AboutHero';
import AboutDetails from '@/components/about/AboutDetails';

export default async function About() {

  const lang = await Lang();

  const resHero = (await axios.get(`about_hero?lang=${lang}`)).data[0];
  const resTeam = (await axios.get(`about_team?lang=${lang}`)).data;
  const resDetails = (await axios.get(`about_details?lang=${lang}`)).data[0];
  const resGroup = (await axios.get(`about_group_section?lang=${lang}`)).data;


   return (
    <div className='About'>
      <AboutHero hero={resHero}/>
      <AboutTeam team={resTeam}/>
      <AboutDetails details={resDetails}/>
      <AboutGroup group={resGroup}/>
    </div>
  );
}
import Lang from "@/lib/lang"
import axios from "@/lib/api";
import ContactHero from "@/components/contact/ContactHero";
import ContactQuestion from "@/components/contact/ContactQuestion";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";


export default async function Contact() {
  const lang = await Lang();

  const resHero = (await axios.get(`contact_hero?lang=${lang}`)).data[0];
  const resQuestionHeading = (await axios.get(`contact_question_heading?lang=${lang}`)).data[0];
  const resQuestion = (await axios.get(`contact_question_section?lang=${lang}`)).data;
  const resDetails = (await axios.get(`contact_details?lang=${lang}`)).data[0];
  const resForm = (await axios.get(`contact_form?lang=${lang}`)).data[0];

  return (
    <div>
      <ContactHero hero={resHero}/>
      <ContactQuestion heading={resQuestionHeading} data={resQuestion}/>
      <ContactDetails details={resDetails}/>
      <ContactForm data={resForm}/>
    </div>
  )
}
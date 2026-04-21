import FooterLable from "./FooterLable";
import Lang from "@/lib/lang";
import axios from "@/lib/api";
import styles from './Footer.module.css';

export default async function Footer() {
  
  const lang = await Lang();
  const res = (await axios.get(`footer?lang=${lang}`)).data[0];

  return (
    <footer className={styles.Footer}>
      <FooterLable data={res}/>
    </footer>
  )
}

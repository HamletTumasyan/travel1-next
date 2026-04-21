import Logo from "./Logo";
import Navbar from "./Navbar";
import Langs from "./Langs";
import Lang from "@/lib/lang";
import axios from "@/lib/api";
import styles from './Header.module.css';

export default async function Header() {
    const lang = await Lang();

    const resLogo = (await axios.get('logo')).data;
    const resNav = (await axios.get(`navbar?lang=${lang}`)).data;
    const resLangs = (await axios.get('langs')).data;

  return (
    <header className={styles.Header}>
        <Logo logo={resLogo}/>
        <Navbar navbar={resNav}/>
        <Langs langs={resLangs} currentLang={lang}/>
    </header>
  )
}

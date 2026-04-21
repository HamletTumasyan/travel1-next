'use client'
import styles from './Header.module.css';

export default function Langs({langs, currentLang}) {

  const changeLang = (code) => {
    const data = new Date();
    data.setFullYear(data.getFullYear() + 10);
    document.cookie = `lang=${code}; path=/; expires=${data}`;
    window.location.reload();
  }

  return (
    <div className={styles.languageDropdown}>
        <div className={styles.selectedLang}>
            <img src="/images/header/language.svg" alt="Lang" />
        </div>

        <div className={styles.dropdownMenu}>
            {
                langs.map(elem => (
                    <p key={elem.id} onClick={() => changeLang(elem.code)}>{elem.code}</p>
                ))
            }
        </div>
    </div>
  )
}

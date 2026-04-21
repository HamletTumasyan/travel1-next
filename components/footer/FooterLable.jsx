import Link from "next/link";
import styles from './Footer.module.css';

export default function FooterLable({ data }) {
  return (
    <>
      <div className={styles.top}>
        <Link href={'/'} className={styles.logo}>{data.title}</Link>

        <div className={styles.social}>
          {data.social_links.map((elem) => (
            <a href={elem.url} key={elem.id} target="_blank">
              <img src={elem.image} alt={elem.url} />
            </a>
          ))}
        </div>

        <div>
          {data.contact.map((elem) => (
            <div key={elem.id} className={styles.contact}>
              <img src={elem.image} alt="contact" />
              <p>{elem.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{data.credit}</p>
      </div>
    </>
  );
}

import styles from '@/components/contact/ContactHero.module.css';

export default function ContactHero({ hero }) {
  return (
    <div>
      <div className={styles.packages}
        style={{
              backgroundImage: `url(${hero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
      >
        <h1 className={styles.heading}>{hero.text}</h1>
      </div>
    </div>
  );
}

import styles from '@/components/services/ServicesHero.module.css';

export default function Hero({ hero }) {
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

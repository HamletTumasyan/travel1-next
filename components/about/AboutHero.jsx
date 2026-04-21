import styles from './AboutHero.module.css';

export default function AboutHero({hero}) {
  return (
    <div
      className={styles.hero}
      style={{
              backgroundImage: `url(${hero.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
    >
      <h2>{hero.title}</h2>
    </div>
  );
}

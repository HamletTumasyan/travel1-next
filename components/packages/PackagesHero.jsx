import styles from '@/components/packages/PackagesHero.module.css';

export default function PackagesHero({data}) {
  return (
    <div>
      <div className={styles.packages}
        style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
      >
        <h1 className={styles.heading}>{data.text}</h1>
      </div>
    </div>
  );
}
import styles from '@/components/packages/PackagesContent.module.css';
import { FaHeart } from "react-icons/fa";

export default function PackagesContent1({data}) {
  return (
    <div className={styles.Packages}>
      <div className={styles.container}>
        {data.map((elem) => (
          <div
            key={elem.id}
            className={styles.item}
            style={{
              backgroundImage: `url(${elem.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className={styles.discount}>{elem.discount}</span>

            <div className={styles.content}>
              <p className={styles.priceHeart}>
                <FaHeart className={styles.heartIcon} />
              </p>
              <p>{elem.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
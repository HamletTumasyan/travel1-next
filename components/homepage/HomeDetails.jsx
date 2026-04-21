import { MdStarRate } from "react-icons/md";
import styles from '@/components/homepage/HomeDetails.module.css'

export default function PackagesDetails({ data }) {
  return (
    <div className={styles.Details}>
      <p className={styles.description}>{data.description}</p>

      <div className={styles.stars}>
        {Array.from({ length: 5 }, (_, i) => (
            <MdStarRate key={i} className={styles.star} />
        ))}
      </div>
    </div>
  );
}
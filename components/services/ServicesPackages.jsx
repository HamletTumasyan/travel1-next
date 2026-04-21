import { FaHeart } from "react-icons/fa"; 
import styles from "./ServicesPackages.module.css";

export default function Packages({ heading, packages }) {
  return (
    <div className={styles.Packages}>
      <h2 className={styles.heading}>{heading.title}</h2>

      <div className={styles.container}>
        {packages.map((elem) => (
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
              <p>
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

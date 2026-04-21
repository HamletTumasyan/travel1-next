import styles from "./AboutGroup.module.css";

export default function AboutGroup({ details, group }) {
  return ( 
      <div className={styles.groupSections}>
        {group.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.groupItem} ${index % 2 === 0 ? styles.leftAligned : styles.rightAligned}`}
          >
            <div className={styles.content}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            
            <div className={styles.imageBox}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
  );
}
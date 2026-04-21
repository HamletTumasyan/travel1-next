import styles from './HomePackages.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function HomePackages({ data, title }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
                {
                    data.map(elem => (
                        <div key={elem.id} className={styles.item}>
                            <span className={styles.discount}>{elem.discount}</span>
                            <img src={elem.image} alt={elem.title} className={styles.itemImage} />
                            <div className={styles.content}>
                                <FontAwesomeIcon icon={faHeart} className={styles.heartImage} />
                                <p className={styles.itemTitle}>{elem.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

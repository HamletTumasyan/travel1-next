import styles from './HomeGallery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function HomeGallery({ data, title }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.galleryTitle}>{title}</h2>
            <div className={styles.gallery}>
                <div className={styles.firstItems}>
                    {data.slice(0, 3).map(item => (
                        <div className={styles.item} key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className={styles.itemContent}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.subtitle}>{item.subtitle}</div>
                                <FontAwesomeIcon icon={faHeart} className={styles.heartImage} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.secondItems}>
                    {data.slice(-3).map(item => (
                        <div className={styles.item} key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className={styles.itemContent}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.subtitle}>{item.subtitle}</div>
                                <FontAwesomeIcon icon={faHeart} className={styles.heartImage} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

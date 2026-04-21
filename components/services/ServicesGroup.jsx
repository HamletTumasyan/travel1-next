import { MdStarRate } from "react-icons/md";
import style from "./ServicesGroup.module.css";

export default function PackagesInfo({ group }) {
  return (
    <div className={style.groupContent}>

      <div className={style.groupLeft}>
        <div className={style.groupImageContainer}>
          <img
            src={group.image}
            alt={group.title}
            className={style.groupImage}
          />
        </div>

        <div className={style.packageInfo}>
          <h2 className={style.packageTitle}>{group.title}</h2>
          <p className={style.priceValue}>
            {group.price_title}     ${group.price}
          </p>

          <div className={style.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <MdStarRate key={i} className={style.star}/>
            ))}
          </div>

          <p className={style.groupDescription}>{group.description}</p>
        </div>
      </div>

      <div className={style.groupRight}>
        <div className={style.rightImageStack}>
          {group.images_cont.map((elem, index) => (
            <img
              key={index}
              src={elem.img}
              alt="picture"
              className={style.rightImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

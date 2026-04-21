import { MdStarRate } from "react-icons/md";
import style from './AboutDetails.module.css'

export default function AboutDetails({details}) {
  return (
    <div className={style.Details}>
        <p>{details.description}</p>

        <div className={style.stars}>
          {Array.from({ length: 5 }, (_, i) => (
            <MdStarRate key={i} className={style.star} />
          ))}
        </div>
      </div>
  )
}

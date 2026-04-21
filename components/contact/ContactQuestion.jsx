"use client";
import { useState } from "react";
import style from "./ContactQuestion.module.css";

export default function ContactQuestion({ heading, data }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h2 className={style.heading}>{heading.title}</h2>

      <div className={style.questions}>
        {data.map((elem, index) => (
          <div
            key={elem.id}
            className={style.question}
            onClick={() => toggle(elem.id)}
          >
            <div className={style.title}>
              <h4>
                {index + 1}. {elem.title}
              </h4>
              <img
                className={openId === elem.id ? style.rotate : ""}
                src={elem.image}
                alt="arrow"
              />
            </div>

            <div
              className={`${style.description} ${openId === elem.id ? style.active : ""}`}
            >
              <p>{elem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

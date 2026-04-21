"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";

export default function ContactLable({ data }) {
  const form = useRef();

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    });

    try {
      alert(data.form_send_successfully);
      form.current.reset();
    } catch {
      alert(data.form_send_error);
    }
  };

  return (
    <>
      <h2 className={style.contactTitle}>{data.title}</h2>

      <form ref={form} onSubmit={sendEmail} className={style.form}>
        <input
          type="text"
          placeholder={data.form_input_placeholder_name}
          name="name"
          className={style.input}
        />

        <input
          type="email"
          placeholder={data.form_input_placeholder_email}
          name="email"
          className={style.input}
        />

        <textarea
          placeholder={data.form_input_placeholder_message}
          name="message"
          className={style.textarea}
          style={{ resize: "none" }}
        ></textarea>

        <button type="submit" className={style.btn}>
          {data.btn_text}
        </button>
      </form>
    </>
  );
}

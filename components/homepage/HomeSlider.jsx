'use client'
import styles from './HomeSlider.module.css';
import { useState,useEffect } from 'react';


export default function HomeSlider({ data }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const next = () => {
        if (currentSlide === data.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(prev => prev + 1)
        }
    }
    const prev = () => {
        if (currentSlide === 0) {
            setCurrentSlide(data.length - 1)
        } else {
            setCurrentSlide(prev => prev - 1)

        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [data.length])

    return (
        <div className={styles.Slider}>
            {
                data.map((elem, index) => (
                    <div
                        key={elem.id}
                        className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${elem.image})` }}>
                        <h1>{elem.title}</h1>
                        <p>{elem.descr}</p>
                    </div>
                ))
            }
            <div className={styles.arrowBtns}>
                <img
                    onClick={prev}
                    src="/images/homepage/slider/arrow-left.svg"
                    alt="arrow-left" />
                <img
                    onClick={next}

                    src="/images/homepage/slider/arrow-right.svg"
                    alt="arrow-right"
                />

            </div>

            <div className={styles.controls}>
                {
                    data.map((elem, index) => (
                        <span
                            key={elem.id}
                            onClick={() => setCurrentSlide(index)}
                            className={currentSlide === index ? styles.active : ''}
                        />

                    ))
                }
            </div>
        </div>
    )
}
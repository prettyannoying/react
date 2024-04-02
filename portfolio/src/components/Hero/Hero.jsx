import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Skeny</h1>
            <p className={styles.description}>I'm a fullstack developer, with 4 years of experience</p>
            <a className={styles.contact} href='mailto:skeny27@gmail.com'>Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt = 'Hero image'></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}
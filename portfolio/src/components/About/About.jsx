import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me with no rest and relaxation"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Worked on React, NodeJs and Javascript</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Fullstack Developer</h3>
                            <p>Worked with Java, Javascript & Servicenow</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
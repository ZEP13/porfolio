import styles from "../../assets/styles/contact.module.css";



export default function Contact() {
    return (
        <>
            <section className={styles.contactSection}>
                <span className={styles.contact}>
                    CONTACT
                </span>
                <footer className={styles.footer}>
                    <div className={styles.outro}>
                        <p>
                            Have a question, a web project in mind, or interested in connecting? I’m available for collaborations and forward-thinking digital ideas.
                        </p>
                    </div>
                    <div className={styles.mail}>
                        <ul>
                            <li>Email</li>
                            <li> <a href="">zephyr.lathuy@gamil.com</a></li>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <ul>
                            <li>
                                Social
                            </li>
                            <li>
                                <a href="">Linkedin</a>
                            </li>
                            <li>
                                <a href="">GitHub</a>
                            </li>
                            <li>
                                <a href="">Kaggle</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p style={{ display: "flex", justifyContent:"flex-end" }}>Made By Zephyr Lathuy<br />
                        © 2025 ZEPDEV 
                        </p>
                    </div>
                </footer>
            </section>
        </>
    );
}


import styles from "../../assets/styles/contact.module.css"; // Importation des styles CSS en tant que module

function Contact() {
    return (
        <>
            <section className={styles.contactSection}>

                <div className={styles.left}>
                    <h1 className={styles.title}>Contactez-moi</h1>
                    <p className={styles.description}>
                        Si vous avez des questions ou souhaitez collaborer, n'hésitez pas à me contacter.
                        Remplissez le formulaire ci-dessous, et je vous répondrai dans les plus brefs délais !
                    </p>
                </div>

                <div className={styles.right}>
                    <h2 className={styles.subTitle}>Formulaire de Contact</h2>
                    <form className={styles.contactForm}>
                        <input
                            type="text"
                            className={styles.contactInput}
                            placeholder="Votre nom"
                            required
                        />
                        <input
                            type="email"
                            className={styles.contactInput}
                            placeholder="Votre email"
                            required
                        />
                        <textarea
                            className={styles.contactInput}
                            placeholder="Votre message"
                            rows="6"
                            required
                        />
                        <a href="#" className={styles.contactButton}>Envoyer le message</a>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;

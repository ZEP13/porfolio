import styles from "../../assets/styles/nav.module.css";


function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_div}>
                <div className={styles.nav__logo}>
                    <img src="#" alt="logo" />
                </div>
                <ul className={styles.nav__links}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;

import styles from './Footer.module.css'
import {FaLinkedin, FaGithub } from "react-icons/fa"


function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contact}>
                    <h2>Meu contato:</h2>
                    <h2>(31)97341-2882</h2>
                </div>
                <div>
                    <h2>Email:</h2>
                    <h2>joaolopes00@outlook.com</h2>
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/joaolopes00-r"><FaGithub className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/joão-victor-lopes-rodrigues-8481ab286/"><FaLinkedin className={styles.iconSize} /></a>
                        </li>
                        </ul>
                </div>
            </div>
        </>
    )
}
 
export default Footer;
import styles from "./Header.module.css";
import ingniteLogo from "../assets/ignite-logo.png"
// console.log(styles);

export function Header(){
    return(
        <>
        <header className={styles.header}>
        <img src={ingniteLogo} alt="Logo ignite" />
        </header>
        </>
    );

}
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Image 
                src={"/assets/dogs-footer.svg"} 
                alt="Dogs" 
                width={28} 
                height={22} 
            />
            <p>© 2022 Dogs. Todos os direitos reservados.</p>
        </footer>
    );
}
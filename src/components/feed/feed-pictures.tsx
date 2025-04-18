import { Picture } from "@/actions/pictures-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";

export default function FeedPictures({ pictures }: { pictures: Picture[] }) {
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {pictures.map((picture, index) => (
                <li className={styles.photo} key={picture.id + index}>
                    <Link href={`/picture/${picture.id}`} scroll={false}>
                        <Image 
                            src={picture.src} 
                            width={1500} 
                            height={1500} 
                            alt={picture.title} 
                            sizes="80vw"
                        />
                        
                        <span className={styles.visualizacao}>{picture.acessos}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
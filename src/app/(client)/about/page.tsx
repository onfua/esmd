import styles from './about.module.css'
import Title from '@/components/title/title'
import picture from '@/assets/images/rectangle-1284.png'
import Image from 'next/image'
import Chiffre from '@/components/chiffreESMD/chiffre'
import Link from 'next/link'
import ProductPost from '@/components/product-post/productPost'

const About = () => {
    return (
        <>
            <Title title="A propos"/>
            <div className={styles.first}>
                <div className={styles.left}>
                    <h1>Passionnés par la découverte des merveilles aromatiques</h1>
                    <p>
                        <span>Nous croyons que les épices et les huiles essentielles ne sont pas seulement des ingrédients, mais une porte d&apos;entrée vers un monde de saveurs et de bien-être.</span> 
                        <span>Notre parcours a commencé avec notre amour commun pour l&apos;exploration culinaire et le désir de fournir aux gens les meilleurs produits disponibles, les plus authentiques.</span>
                        <span>Le désir de fournir aux gens l&apos;authenticité à travers le terroir de la grande île.</span>
                    </p>
                </div>
                <div className={styles.right}>
                    <Image src={picture} alt='Passionnés par la découverte des merveilles aromatiques'></Image>
                </div>
            </div>
            <Chiffre></Chiffre>
            <div className={styles.second}>
                <div className={styles.leftS}>
                    <Image src={picture} alt='Cultivé et fabriqué soigneusement'></Image>
                </div>
                <div className={styles.rightS}>
                    <h1>Cultivé et fabriqué soigneusement</h1>
                    <p>
                        <span>ESMD.export est une entreprise consciente du potentiel que représente Madagascar et ses producteurs en matières d’épices, d’huiles essentielles et d’eaux florales.</span> 
                        <span>Nous cherchons au mieux à valoriser toute la chaine de production, depuis les liens entre nos fournisseurs et les producteurs, jusqu’à notre clientèle et leur exigence.</span>
                        <span>Simplicité, résilience et efficience sont les maîtres mots pour notre équipe.</span>
                    </p>
                    <Link href='/about' className={styles.link}>En savoir plus sur nous</Link>
                </div>
            </div>
            <ProductPost></ProductPost>
        </>
    )
}

export default About;
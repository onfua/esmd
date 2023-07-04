import style from './secondPoster.module.css'
import picture from '@/assets/images/secondPoster/rectangle-1280.png'

import Image from 'next/image'
import Link from 'next/link'

export default function SecondPost(){
    return (
        <div className={style.main}>
            <div className={style.left}>
                <Image src={picture} alt='Cultivé et fabriqué soigneusement'></Image>
            </div>
            <div className={style.right}>
                <h1>Cultivé et fabriqué soigneusement</h1>
                <p>
                    <span>ESMD.export est une entreprise consciente du potentiel que représente Madagascar et ses producteurs en matières d’épices, d’huiles essentielles et d’eaux florales.</span> 
                    <span>Nous cherchons au mieux à valoriser toute la chaine de production, depuis les liens entre nos fournisseurs et les producteurs, jusqu’à notre clientèle et leur exigence.</span>
                    <span>Simplicité, résilience et efficience sont les maîtres mots pour notre équipe.</span>
                </p>
                <Link href='/about' className={style.link}>En savoir plus sur nous</Link>
            </div>
        </div>
    )
}
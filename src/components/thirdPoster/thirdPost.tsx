import style from './thirdPost.module.css'
import picture from '@/assets/images/thirdPoster/rectangle-1284.png'
import Image from 'next/image'

export default function ThirdPost(){
    const title = "La qualité comme seule exigence depuis 2005"
    const description = "Nos laboratoires partenaires s'assurent de combler nos exigences en matière de qualité de nos produits, mais surtout pour donner entière satisfaction à notre clientèle."

    return (
        <div className={style.main}>
            <div className={style.left}>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Voir notre histoire</button>
            </div>
            <div className={style.right}>
                <Image src={picture} alt='Notre histoire'/>
            </div>
        </div>
    )
}
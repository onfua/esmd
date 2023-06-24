import style from './firstPoster.module.css'
import Image from 'next/image'
import bottomImage from '@/assets/images/firstPoster/rectangle-1273.png'
import topImage from '@/assets/images/firstPoster/rectangle-1273-1.png'

export default function FirstPoster(){
    const title = "Des produits de qualité de Madagascar"
    const subTitle = "épices - Huiles essentielles - Eau florale"
    const description = "Nous vendons et exportons des produits sélectionnés de Madagascar"

    return (
        <div className={style.main}>
            <div className={style.left}>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
                <p>{description}</p>
                <button>Explorer nos produits</button>
            </div>
            <div className={style.right}>
                <Image className={style.bot} src={bottomImage} alt='image epice'></Image>
                <Image className={style.top} src={topImage} alt="image epice"></Image>
            </div>
        </div>
    )
}
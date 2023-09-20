'use client'
import style from './firstPoster.module.css'
import Image from 'next/image'
import bottomImage from '@/assets/images/firstPoster/Rectangle 1273.png'
import { useRouter } from 'next/navigation'

export default function FirstPoster(){
    const title = "Des produits de qualité de Madagascar"
    const subTitle = "épices - Huiles essentielles - Eau florale"
    const description = "Nous vendons et exportons des produits sélectionnés de Madagascar"
    const route = useRouter()

    return (
        <div className={style.main}>
            <div className={style.left}>
                <h1>{title}</h1>
                <h3>{subTitle}</h3>
                <p>{description}</p>
                <button onClick={()=>route.push('products')}>Explorer nos produits</button>
            </div>
            <div className={style.right}>
                <Image className={style.bot} src={bottomImage} alt='image epice' width={720} height={924}></Image>
            </div>
        </div>
    )
}
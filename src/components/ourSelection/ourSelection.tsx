import style from './ourSelection.module.css'

import Products from './selectionnedProduct/product'
import Link from 'next/link'

export default function OurSelection(){
    return (
        <div className={style.main}>
            <h1>Nos sélections pour vous</h1>
            <Products></Products>
            <Link href='/suggested' className={style.link}>Voir tout</Link>
        </div>
    )
}
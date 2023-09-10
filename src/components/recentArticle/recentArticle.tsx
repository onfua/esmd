import style from './recentArticle.module.css'

import Products from './recent/recent'
import Link from 'next/link'

export default function RecentArticle(){
    return (
        <div className={style.main}>
            <h1>Articles récents</h1>
            <Products></Products>
            <Link href='/blog' className={style.link}>Voir tous les articles</Link>
        </div>
    )
}
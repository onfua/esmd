'use client'

import {useState} from 'react'

import style from './productPost.module.css'
import Product from './product/product'
import Link from 'next/link'

type product = 'epice' | 'huile'

export default function ProductPost(){
    const [type,setType] = useState<product>('epice')

    const typed = (n : number) : string => {
        if (n === 0){
            return type==="epice"?style.selected:''
        }else{
            return type==="huile"?style.selected:''
        }
    }

    return (
        <div className={style.main}>
            <h1>Nos produits</h1>
            <div className={style.buttons}>
                <button className={style.select + ' ' + typed(0)} onClick={()=>setType('epice')}>épices</button>
                <button className={style.select+' '+typed(1)} onClick={()=>setType('huile')}>huiles essentielles</button>
            </div>
            <div className={style.products}>
                <Product type={type}></Product>
            </div>
            <div className={style.link}>
                <Link href="/products" className={style.see}>Voir tous nos produits</Link>
            </div>
            
        </div>
    )
}
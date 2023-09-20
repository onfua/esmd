'use client'

import {useState,useEffect} from 'react'
import api,{host} from '@/utils/axiosConnect'
import style from './productPost.module.css'
import Product from './product/product'
import Link from 'next/link'

export default function ProductPost(){
    const [type,setType] = useState<string>('epice')
    const [types,setTypes] = useState<string[]>([])

    useEffect(()=>{
        const action = async () => {
            try{
                const res = await api.get('api/type-de-produits')
                setTypes(res.data.data.map((e : any)=>{
                    return e.attributes.Categorie
                }))
            }catch(err){    
                console.error(err)
            }
        }
        action()
    },[])

    useEffect(()=>{
        setType(types[0])
    },[types])

    const typed = (n : string) : string => {
        return n===type?style.selected:''
    }

    return (
        <div className={style.main}>
            <h1>Nos produits</h1>
            <div className={style.buttons}>
                {
                    types.map((e : string,index:number)=>{
                        return <button key={index} className={style.select + ' ' + typed(e)} onClick={()=>setType(e)}>{e}</button>
                    })
                }
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
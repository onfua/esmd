'use client'

import { StaticImageData } from 'next/image'
import style from './recent.module.css'

import picture from '@/assets/images/recentArticle/rectangle-1287.png'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Link from 'next/link'

type productType = {
    image : string | StaticImageData,
    name : string,
    id : number | string
}

export default function Products(){
    const [products,setProducts] = useState<productType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            //static file
            const data : productType[] = [{image:picture,name:'Comment bien conserver les épices longtemps?',id:1},{image:picture,name:'Comment bien conserver les épices longtemps?',id:2},{image:picture,name:'Comment bien conserver les épices longtemps?',id:3}]
            setProducts(data)
        }
        getProducts()
    },[])

    const displayProducts = () => {
        return products.map(({image,name,id} : productType) => {
            return (
                <div className={style.product} key={id}>
                    <div className={style.image}>
                        <Image src={image} alt={name}></Image>
                    </div>
                    <h3>{name}</h3>
                    <Link href={`/blog/${id}`} className={style.link}>lire l'article</Link>
                </div>
            )
        })
    }

    return (
        <div className={style.main}>
            {displayProducts()}
        </div>
    )
}
'use client'

import { StaticImageData } from 'next/image'
import style from './product.module.css'

import picture from '@/assets/images/product-suggested/ravitsara-removebg-preview-4.png'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type productType = {
    image : string | StaticImageData,
    name : string,
    price : number,
    id : number | string
}

export default function Products(){
    const [products,setProducts] = useState<productType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            //static file
            const data : productType[] = [{image:picture,name:'Huile essentielles de Ravintsara 30ml',price:15,id:1},{image:picture,name:'Huile essentielles de Ravintsara 30ml',price:15,id:2},{image:picture,name:'Huile essentielles de Ravintsara 30ml',price:15,id:3}]
            setProducts(data)
        }
        getProducts()
    })

    const displayProducts = () => {
        return products.map(({image,name,price,id} : productType) => {
            return (
                <div className={style.product} key={id}>
                    <div className={style.image}>
                        <Image src={image} alt={name}></Image>
                    </div>
                    <h3>{name}</h3>
                    <h4>{price}€</h4>
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
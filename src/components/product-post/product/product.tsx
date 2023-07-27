'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import image from '@/assets/images/product-post/pngegg-51.png'
import style from './product.module.css'
import { StaticImageData } from 'next/image'

type product = 'epice' | 'huile'

type propsProduct = {
    type : product
}

type prod = {
    image : string | StaticImageData,
    name : string,
    id : number
}

type products = prod[]

export default function Product(props : propsProduct){

    const [products,setProducts] = useState<products>([])

    useEffect(() => {
        const getProduct = async () => {
            //static file
            const data : products = [{image,name:'Baies roses',id:1},{image,name:'Baies roses',id:2},{image,name:'Baies roses',id:3},{image,name:'Baies roses',id:4}]
            setProducts(data)
        }
        getProduct()
    },[props.type])

    const displayProducts = () => {
        return products.map(({image , name, id} : prod) => {
            return (
                <div className={style.product} key={id}>
                    <div className={style.imageContainer}>
                        <Image className={style.image} src={image} alt={name}></Image>
                    </div>
                    <h3>{name}</h3>
                </div>
            )
        })
    }

    return (
        <div className={style.products}>
            {displayProducts()}
        </div>
    )
}
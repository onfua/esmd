'use client'

import { StaticImageData } from 'next/image'
import style from './product.module.css'
import api,{host} from '@/utils/axiosConnect'
import picture from '@/assets/images/product-suggested/ravitsara-removebg-preview-4.png'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type productType = {
    image : string | StaticImageData,
    name : string,
    price : number,
    id : number | string
}

export default function Products(){
    const [products,setProducts] = useState<productType[]>([])
    const route = useRouter()
    useEffect(() => {
        const getProducts = async () => {
            const res = await api.get('api/selections?populate[0]=produit.Image&pagination[page]=1&pagination[pageSize]=3')
            setProducts(res.data.data.map((e:any)=>{
                return {
                    image : host + e.attributes.produit.data.attributes.Image.data.attributes.url,
                    name : e.attributes.produit.data.attributes.Nom,
                    price : 0,
                    id : e.id
                }
            }))
        }
        getProducts()
    },[])

    const displayProducts = () => {
        return products.map(({image,name,price,id} : productType) => {
            return (
                <div className={style.product} key={id} onClick={()=>route.push(`products/${id}`)}>
                    <div className={style.image}>
                        <Image src={image} alt={name} width={341} height={347}></Image>
                    </div>
                    <h3>{name}</h3>
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
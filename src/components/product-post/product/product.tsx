'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import style from './product.module.css'
import { StaticImageData } from 'next/image'
import api,{host} from '@/utils/axiosConnect'

type propsProduct = {
    type : string
}

type prod = {
    image : string | StaticImageData,
    name : string,
    id : number
}

type products = prod[]

export default function Product(props : propsProduct){
    const route = useRouter()
    const [products,setProducts] = useState<products>([])

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await api.get(`api/produits?filters[type_de_produit][Categorie][$eq]=${props.type}&populate=*&pagination[page]=1&pagination[pageSize]=4`)
                setProducts(res.data.data.map((e : any)=>{
                    return {
                        id : e.id,
                        name : e.attributes.Nom,
                        image : host+e.attributes.Image.data.attributes.url
                    }
                }))
            }catch(err){
                console.error(err)
            }

        }
        getProduct()
    },[props.type])

    const displayProducts = () => {
        return products.map(({image , name, id} : prod) => {
            return (
                <div className={style.product} key={id} onClick={()=>route.push(`/products/${id}`)}>
                    <div className={style.imageContainer}>
                        <Image className={style.image} src={image} alt={name} width={147} height={147}></Image>
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
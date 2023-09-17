'use client'

import { StaticImageData } from 'next/image'
import style from './recent.module.css'

import picture from '@/assets/images/recentArticle/rectangle-1287.png'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import Link from 'next/link'

import api,{host} from '@/utils/axiosConnect'

type productType = {
    image : string | StaticImageData,
    name : string,
    id : number | string
}

export default function Products(){
    const [products,setProducts] = useState<productType[]>([])

    useEffect(() => {
        const action = async () => {
            try{
                const res = await api.get(`api/blogs?populate[0]=Image&pagination[page]=1&pagination[pageSize]=3`)
                console.log(res)
                if (res.data.data){
                    setProducts(res.data.data.map((e : any)=>{
                        return {
                            id: e.id,
                            image : host+e.attributes.Image.data.attributes.url,
                            name : e.attributes.Titre
                        }
                    }))
                }
            }catch(e){
                console.error(e)
            }
        }
        action()
    },[])

    const displayProducts = () => {
        return products.map(({image,name,id} : productType) => {
            return (
                <div className={style.product} key={id}>
                    <div className={style.image}>
                        <Image src={image} alt={name} width={341} height={251}></Image>
                    </div>
                    <h3>{name}</h3>
                    <Link href={`/blog/${id}`} className={style.link}>lire l&apos;article</Link>
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
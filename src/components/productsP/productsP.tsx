'use client'

import { useState } from "react"
import { StaticImageData } from 'next/image';
import im from '@/assets/images/product-post/pngegg-51.png'
import style from './productsP.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation'

type Repo = {
    name: string
    image: string | StaticImageData,
    id : number | string
}

type Repos = Repo[]

const ProductsP = () => {
    const router = useRouter()
    const [epice,setEpice] = useState<Repos>([
        {
            name : "Baies roses",
            image : im,
            id : 1
        },
        {
            name : "Baies roses",
            image : im,
            id : 2
        },
        {
            name : "Baies roses",
            image : im,
            id : 3
        },
        {
            name : "Baies roses",
            image : im,
            id : 4
        },
        {
            name : "Baies roses",
            image : im,
            id : 5
        },
        {
            name : "Baies roses",
            image : im,
            id : 6
        },
        {
            name : "Baies roses",
            image : im,
            id : 7
        },
        {
            name : "Baies roses",
            image : im,
            id : 8
        },
        {
            name : "Baies roses",
            image : im,
            id : 9
        },
        {
            name : "Baies roses",
            image : im,
            id : 10
        }
    ])
    const [huile,setHuile] = useState<Repos>([
        {
            name : "Baies roses",
            image : im,
            id : 1
        },
        {
            name : "Baies roses",
            image : im,
            id : 2
        },
        {
            name : "Baies roses",
            image : im,
            id : 3
        },
        {
            name : "Baies roses",
            image : im,
            id : 4
        },
        {
            name : "Baies roses",
            image : im,
            id : 5
        },
        {
            name : "Baies roses",
            image : im,
            id : 6
        },
        {
            name : "Baies roses",
            image : im,
            id : 7
        },
        {
            name : "Baies roses",
            image : im,
            id : 8
        },
        {
            name : "Baies roses",
            image : im,
            id : 9
        },
        {
            name : "Baies roses",
            image : im,
            id : 10
        }
    ])
    return (
        <>
            <div className={style.cat}>
                <h2>Epices</h2>
                <div className={style.products}>
                {
                    epice.map(({name,image,id}: Repo)=>{
                        return (
                            <div className={style.product} key={id} onClick={()=>{router.push(`/products/${id}`)}}>
                                <div className={style.imageContainer}>
                                    <Image className={style.image} src={image} alt={name} width={147} height={147}></Image>
                                </div>
                                <h3>{name}</h3>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
            <div className={style.cat}>
                <h2>Huiles essentielles</h2>
                <div className={style.products}>
                {
                    epice.map(({name,image,id}: Repo)=>{
                        return (
                            <div className={style.product} key={id} onClick={()=>{router.push(`/products/${id}`)}}>
                                <div className={style.imageContainer}>
                                    <Image className={style.image} src={image} alt={name}></Image>
                                </div>
                                <h3>{name}</h3>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </>
    )
}

export default ProductsP;
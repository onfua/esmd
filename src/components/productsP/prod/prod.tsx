'use client'

import style from './prod.module.css'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import api,{host} from '@/utils/axiosConnect'
import { useState, useEffect } from 'react'

type Repo = {
    name: string
    image: string | StaticImageData,
    id : number | string
}

const Prod = (props : {categorie : string}) => {
    const router = useRouter()
    const [produits,setProduits] = useState<Repo[]>([])

    useEffect(()=>{
        const action = async () => {
            try{
                const res = await api.get(`api/produits?populate=*&filters[type_de_produit][Categorie][$eq]=${props.categorie}`)
                setProduits(res.data.data.map((e : any)=>{
                    return {
                        name : e.attributes.Nom,
                        image : host+e.attributes.Image.data.attributes.url,
                        id : e.id
                    }
                }))
            }catch(err){
                console.error(err)
            }
        }
        action()
    },[])
    return produits.length>0?(<div className={style.cat}>
                <h2>{props.categorie}</h2>
                <div className={style.products}>
                {
                    produits.map(({name,image,id}: Repo)=>{
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
                
            </div>):<></>
}

export default Prod
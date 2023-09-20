'use client'

import { useState,useEffect } from "react"
import { StaticImageData } from 'next/image';
import im from '@/assets/images/poivre.png'
import style from './p.module.css'
import Image from "next/image";
import picture from '@/assets/images/secondPoster/rectangle-1280.png'
import api,{host} from "@/utils/axiosConnect";
type Data = {
    image : string | StaticImageData,
    name : string,
    description : string,
    variantes : string[],
    sous_titre : string,
    para : string,
    type : string,
    id : string | number
}

export default function Page({ params }: { params: { id: string } }) {
    const [data,setData] = useState<Data>({
        id: params.id,
        type : "",
        image: im,
        name : "",
        description : ``,
        variantes : [],
        sous_titre:"",
        para : ``
    })

    useEffect(()=>{
        const action = async () => {
            const res = await api.get(`api/produits/${params.id}?populate=*`)
            setData({
                id : res.data.data.id,
                type : res.data.data.attributes.type_de_produit.data.attributes.Categorie,
                image : host+res.data.data.attributes.Image.data.attributes.url,
                name : res.data.data.attributes.Nom,
                description : res.data.data.attributes.Description,
                variantes : res.data.data.attributes.Variante.map((e : any):string=>e.Nom),
                sous_titre : res.data.data.attributes.sous_titre,
                para : res.data.data.attributes.sous_description
            })
        }
        action()
    },[])
    return (
        <>
            <div className={style.header}>
                <h1><span className={style.autre}>Nos produits  /  {data.type}  /</span>  {data.name}</h1>
            </div>
            <div className={style.first}>
                <div className={style.container}>
                    <Image src={data.image} alt={data.name} width={444} height={444}></Image>
                </div>
                <div className={style.desc}>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    {
                        data.variantes.length>0?(
                            <>
                                <h3 className={style.var}>Les variantes</h3>
                                <ul>
                                    {
                                        data.variantes.map((e : string,index : number)=>{
                                            return (
                                                <li key={index}>{e}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                        ):<></>
                    }
                </div>
            </div>
            <div className={style.second}>
                <div className={style.left}>
                    <h1>{data.sous_titre}</h1>
                    <p>
                        {data.para.split('.').slice(0,data.para.split('.').length-1).map((e : string,index : number)=>{
                            return (
                                <span key={index}>{e}.</span>
                            )
                        })}
                    </p>
                </div>
                <div className={style.right}>
                    <Image className={style.image} src={picture} alt='Passionnés par la découverte des merveilles aromatiques'></Image>
                </div>
            </div>
        </>
    )
}
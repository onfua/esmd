'use client'

import { useState } from "react"
import { StaticImageData } from 'next/image';
import im from '@/assets/images/poivre.png'
import style from './p.module.css'
import Image from "next/image";
import picture from '@/assets/images/secondPoster/rectangle-1280.png'
type Data = {
    image : string | StaticImageData,
    name : string,
    description : string,
    variantes : string[] | null,
    sous_titre : string,
    para : string,
    type : string,
    id : string | number
}

export default function Page({ params }: { params: { id: string } }) {
    const [data,setData] = useState<Data>({
        id: params.id,
        type : "Epice",
        image: im,
        name : "Poivre",
        description : `Ce poivre est récolté à la main à son stade de maturité optimal, ce qui garantit une fraîcheur et une intensité aromatique incomparables. Chaque grain de poivre est ensuite séché et conditionné avec le plus grand soin, préservant ainsi tous ses arômes naturels et ses propriétés gustatives uniques.`,
        variantes : [
            "Vert en saumure",
            "Noir FAQ",
            "Noir Grade 1",
            "Moulu (250-350 microns)"
        ],
        sous_titre:"Une intensité aromatique incomparables",
        para : `Avec son profil de saveur complexe, notre poivre apporte une chaleur délicate et une légère note piquante à vos plats. 
        Il est polyvalent et s'adapte à une grande variété de recettes, qu'il s'agisse de viandes, de légumes, de sauces ou de marinades.`
    })
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
                        data.variantes?(
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
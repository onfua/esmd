'use client'

import { useState } from 'react';
import style from './blog.module.css'
import Title from '@/components/title/title';
import Image, { StaticImageData } from 'next/image';
import im from '@/assets/images/Rectangle 1278.png'
import Link from 'next/link';

type blog = {
    id : number | string
    image : string | StaticImageData,
    title : string
}
type blogs = blog[]


const Blog = () => {
    const [filtre,setFiltre] = useState<number>(0)
    const [data,setData] = useState<blogs>([
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:1
        },
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:2
        },
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:3
        },
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:4
        },
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:5
        },
        {
            image : im,
            title:'Comment bien conserver les épices longtemps?',
            id:6
        }
    ])

    const checkFiltre = (s: number) : string => {
        if (s===filtre) return style.filtreActive 
        else return ''
    }

    return (
        <>
            <Title title='Blog'></Title>
            <div className={style.first}>   
                <div className={style.container}>
                    <Image src={im} alt='blog first image' width={581} height={421}/>
                </div>
                <div className={style.desc}>
                    <h2>Comment utiliser les huiles essentielles en aromathérapie?</h2>
                    <p>Découvrez notre poivre de qualité supérieure, une épice essentielle pour ajouter une saveur intense et subtile à tous vos plats.</p>
                    <button>Lire l'article</button>
                </div>
            </div>
            <div className={style.blogs}>
                <div className={style.filtre}>
                    <button className={checkFiltre(0)} onClick={()=>setFiltre(0)}>Tout</button>
                    <button className={checkFiltre(1)} onClick={()=>setFiltre(1)}>Epices</button>
                    <button className={checkFiltre(2)} onClick={()=>setFiltre(2)}>Huiles essentielles</button>
                </div>
                <div className={style.blog}>
                    {
                        data.map((e : blog)=>{
                            return (
                                <div key={e.id} className={style.inside}>
                                    <div className={style.insideImg}>
                                        <Image src={e.image} alt={e.title} width={341} height={251}/>
                                    </div>
                                    <h3>{e.title}</h3>
                                    <Link className={style.insideLink} href={`/blog/${e.id}`}>LIRE L’ARTICLE</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.more}>
                    <button>Afficher plus d’articles</button>
                </div>
            </div>
        </>
    )
}

export default Blog;
'use client'

import { useState, useEffect } from 'react';
import style from './blog.module.css'
import Title from '@/components/title/title';
import Image, { StaticImageData } from 'next/image';
import im from '@/assets/images/Rectangle 1278.png'
import Link from 'next/link';
import api, {host} from '@/utils/axiosConnect';
import { useRouter } from 'next/navigation'

type blog = {
    id : number | string
    image : string | StaticImageData,
    title : string
}
type blogs = blog[]


const Blog = () => {
    const router = useRouter()
    const [filtre,setFiltre] = useState<string>("all")
    const [filtres,setFiltres] = useState<string[]>([])
    const [data,setData] = useState<blogs>([
    ])
    useEffect(()=>{
        const action = async() => {
            try{
                const response = await api.get('/api/type-de-produits?fields[0]=Categorie')
                if (response.data.data){
                    setFiltres(response.data.data.map((e : any)=>{
                        return e.attributes.Categorie
                    }))
                }
            }catch(e){
                console.error('Error get filtre')
            }
        }
        action()
    },[])

    useEffect(()=>{
        const action = async () =>{
            try{
                const response = await api.get('api/blogs?fields[0]=Titre&populate[1]=type_de_produit&populate[2]=Image&pages=*');
                if (response.data.data){
                    setData(response.data.data.map((e : any)=>{
                        //if (e.attributes.type_de_produit.data.attributes.Categorie===filtre || filtre==="all"){
                            return {
                                image: host+e.attributes.Image.data.attributes.url,
                                title: e.attributes.Titre,
                                id:e.id,
                                categorie:e.attributes.type_de_produit.data.attributes.Categorie
                            }
                        //}
                    }))
                }
                console.log
            }catch(e : any){
                console.error('Error get blogs')
            } 
        }
        action()
    },[filtres,filtre])

    const showData = () => {
        const res = data.map((e : any)=>{
            if (e.categorie===filtre || filtre==="all"){
                return e
            }
        })
        return res
    }

    const checkFiltre = (s: string) : string => {
        if (s===filtre) return style.filtreActive 
        else return ''
    }

    return (
        <>
            <Title title='Blog'></Title>
            <div className={style.first}>   
                {
                    data[0]?(
                        <>
                            <div className={style.container}>
                                <Image src={data[0].image} alt='blog first image' width={581} height={421}/>
                            </div>
                            <div className={style.desc}>
                                <h2>{data[0].title}</h2>
                                <p>Découvrez notre poivre de qualité supérieure, une épice essentielle pour ajouter une saveur intense et subtile à tous vos plats.</p>
                                <button onClick={()=>{router.push(`/blog/${data[0].id}`)}}>Lire l&apos;article</button>
                            </div>
                        </>
                    ):<></>
                }
                
            </div>
            <div className={style.blogs}>
                <div className={style.filtre}>
                    <button className={checkFiltre("all")} onClick={()=>setFiltre("all")}>Tout</button>
                    {filtres.map((e : string)=>{
                        return <button key={e} className={checkFiltre(e)} onClick={()=>setFiltre(e)}>{e}</button>
                    })}
                </div>
                <div className={style.blog}>
                    {   
                        showData()[0]?showData().map((e : blog)=>{
                            return (
                                <div key={e.id} className={style.inside}>
                                    <div className={style.insideImg}>
                                        <Image src={e.image} alt={e.title} width={341} height={251}/>
                                    </div>
                                    <h3>{e.title}</h3>
                                    <Link className={style.insideLink} href={`/blog/${e.id}`}>LIRE L’ARTICLE</Link>
                                </div>
                            )
                        }):<></>
                    }
                </div>{
                    null?(<div className={style.more}>
                    <button>Afficher plus d’articles</button>
                </div>):<></>
                }
            </div>
        </>
    )
}

export default Blog;
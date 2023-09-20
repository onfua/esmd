'use client'

import { useState, useEffect } from 'react'

import styles from './histoire.module.css'
import Image from 'next/image'
import Title from '@/components/title/title'
import api,{host} from '@/utils/axiosConnect'

type item = {
    id : string | number,
    image : string,
    date : string,
    titre : string,
    description : string
}

const Histoire =()=>{
    const [article,setArticle] = useState<item[]>([])

    useEffect(()=>{
        const action = async () => {
            try{
                const res = await api.get(`api/histoires?populate=*`)
                setArticle(res.data.data.map((e:any) : item=>{
                    return {
                        id : e.id,
                        titre : e.attributes.Titre,
                        date : e.attributes.Annee,
                        description : e.attributes.Description,
                        image : host+e.attributes.Image.data.attributes.url
                    }
                }))
            }catch(err){
                console.error(err)
            }
        }
        action()
    },[])

    return(
        
        <div>
            <Title title="Notre histoire"></Title>
            <section className={styles.section}>
                <p className={styles.descri}>Nous croyons que les épices et les huilles essentielles ne sont pas seulement des ingrédients, mais une porte d&apos;entrée vers un monde de saveurs et de bien-être.</p>
            </section>
            <div className={`container-fluid  position-relative ${styles.container}`}> 
                {
                    // eslint-disable-next-line array-callback-return
                    article.map( (value) =>{
                        return(
                            <div className={`row d-flex ${styles.article}`} key={value.id} >
                                <Image className={styles.image} src={value.image} alt="images" width={448} height={446}/>
                                <div className={`${styles.text} p-lg-5 ms-3`}>
                                    <h2 className={`${styles.myTitle} mt-lg-2`}>{value.date}</h2>
                                    <h3 className={`${styles.sousTitre} mt-lg-4`} >{value.titre}</h3>
                                    <p className={styles.myPara}>{value.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={styles.ligne}></div>
            </div>
        </div>
    )
}

export default Histoire
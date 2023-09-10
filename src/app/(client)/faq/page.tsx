'use client'

import style from './faq.module.css'
import Title from '@/components/title/title';
import { useState } from 'react';
import Faqs from '@/components/faqs/faqs';
import RecentArticle from '@/components/recentArticle/recentArticle';

type categorie = {
    id : number | string,
    name : string
}

const Faq = () => {
    const [categories,setCategories] = useState<categorie[]>([
        {
            id:1,
            name: 'Général'
        },
        {
            id:2,
            name: 'Paiement et livraison'
        }
    ])
    const [active,setActive] = useState<number | string>(1)
    const isActive = (e : number | string) : string => {
        return e==active?style.activeCat:''
    }

    return (
        <>
            <Title title='FAQ'></Title>
            <div className={style.all}>
                <div className={style.cat}>
                    {categories.map((e : categorie)=>{
                        return (
                            <button className={isActive(e.id)} onClick={()=>{setActive(e.id)}} key={e.id}>{e.name}</button>
                        )
                    })}
                </div>
                <Faqs categorie={active}></Faqs>
            </div>
            <RecentArticle></RecentArticle>        
        </>
    )
}

export default Faq;
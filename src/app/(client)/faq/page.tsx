'use client'

import style from './faq.module.css'
import Title from '@/components/title/title';
import { useState , useEffect } from 'react';
import Faqs from '@/components/faqs/faqs';
import RecentArticle from '@/components/recentArticle/recentArticle';
import api from '@/utils/axiosConnect';

type categorie = {
    id : number | string,
    name : string
}

const Faq = () => {
    const [categories,setCategories] = useState<categorie[]>([])
    const [active,setActive] = useState<string>("")
    const isActive = (e : number | string) : string => {
        return e==active?style.activeCat:''
    }

    useEffect(()=>{
        const action =async () => {
            const res = await api.get(`api/type-de-faqs`)
            if (res.data.data.length>0){
                setCategories(res.data.data.map((e:any)=>{
                    return {
                        id : e.id,
                        name : e.attributes.Type
                    }
                }))
            }
        }
        action()
    },[])

    useEffect(()=>{
        if (categories.length>0) setActive(categories[0].name)
        
    },[categories])

    return (
        <>
            <Title title='FAQ'></Title>
            <div className={style.all}>
                <div className={style.cat}>
                    {categories.map((e : categorie)=>{
                        return (
                            <button className={isActive(e.name)} onClick={()=>{setActive(e.name)}} key={e.id}>{e.name}</button>
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
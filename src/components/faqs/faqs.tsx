'use client'
import style from './faqs.module.css'
import { useState,useEffect } from 'react'
import api from '@/utils/axiosConnect'

type faq = {
    id : number | string,
    title : string,
    description : string,
    open : boolean
}

const Faqs = (props : {categorie : number | string}) => {
    const [faqs,setFaqs] = useState<faq[]>([])

    useEffect(()=>{
        const action =async () => {
            if (props.categorie!==""){
                const res = await api.get(`api/faqs?populate[0]=type_de_faq`)
            console.log(res)
            if (res.data.data.length>0){
                setFaqs(res.data.data.map((e : any)=>{
                    if (props.categorie===e.attributes.type_de_faq.data.attributes.Type){
                        return {
                            id : e.id,
                            title : e.attributes.Titre,
                            description : e.attributes.Description,
                            open:false
                        }
                    }
                }))
            }else{
                setFaqs([])
            }
            }
            
        }
        action()
    },[props.categorie])

    return faqs.length>0?(
        <div className={style.faqs}>
            {
                faqs.map((e : faq, ind : number) => {
                    const isOpen = (s : boolean) : string => {
                        return s?style.open:''
                    }
                    const clickAction = (t : number|string) => {
                        let tmp = faqs
                        tmp = tmp.map((tp : faq) : faq=>{
                             if (tp.id === t){
                                return {
                                    id : tp.id,
                                    title : tp.title,
                                    description : tp.description,
                                    open : !tp.open
                                }
                             }else{
                                return tp
                             }
                        })
                        setFaqs(tmp)
                    }
                    return (
                        <div className={`${style.faq} ${isOpen(e.open)}`} key={e.id}>
                            <div className={style.content}>
                                <h2>{e.title}</h2>
                                <p>{e.description}</p>
                            </div>
                            <button onClick={()=>{
                               clickAction(e.id)
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M3.5 10.5L8.5 5.5L13.5 10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                        </div>
                    )
                })
            }
        </div>
    ):<></>
}

export default Faqs
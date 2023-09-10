'use client'
import style from './faqs.module.css'
import { useState } from 'react'

type faq = {
    id : number | string,
    title : string,
    description : string,
    open : boolean
}

const Faqs = (props : {categorie : number | string}) => {
    const [faqs,setFaqs] = useState<faq[]>([
        {
            id : 1,
            title : `Quelle est la politique de livraison et combien de temps faut-il pour recevoir ma commande ?`,
            description : `La politique de livraison varie en fonction de votre emplacement et des options de livraison que vous choisissez lors de votre commande. Généralement, nous nous efforçons de traiter et d'expédier les commandes dans un délai de 1 à 3 jours ouvrables.
            Le délai de livraison dépendra également du service de transporteur utilisé. En règle générale, les livraisons nationales prennent entre 2 et 7 jours ouvrables, tandis que les livraisons internationales peuvent prendre de 7 à 14 jours ouvrables, en fonction de la destination.`,
            open : false
        },
        {
            id : 2,
            title : `Quelle est la politique de livraison et combien de temps faut-il pour recevoir ma commande ?`,
            description : `La politique de livraison varie en fonction de votre emplacement et des options de livraison que vous choisissez lors de votre commande. Généralement, nous nous efforçons de traiter et d'expédier les commandes dans un délai de 1 à 3 jours ouvrables.
            Le délai de livraison dépendra également du service de transporteur utilisé. En règle générale, les livraisons nationales prennent entre 2 et 7 jours ouvrables, tandis que les livraisons internationales peuvent prendre de 7 à 14 jours ouvrables, en fonction de la destination.`,
            open : false
        }
    ])

    return (
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
    )
}

export default Faqs
'use client'
import style from './chiffre.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import epiceI from '@/assets/images/epiceNumber.png'
import huileT from '@/assets/images/huileNumber.png'
import isoT from '@/assets/images/qualite.png'
import satT from '@/assets/images/satNumber.png'
import api from '@/utils/axiosConnect'

const Chiffre = () => {
    const [epice,setEpice] = useState<number>(30)
    const [huile,setHuile] = useState<number>(20)
    const [iso,setIso] = useState<string>('ISO-9001')
    const [satisfaction,setSatisfaction] = useState<number>(98)

    useEffect(()=>{
        const action = async ()=>{
            try{
                const res = await api.get('api/chiffre')
                setEpice(res.data.data.attributes.Epice)
                setHuile(res.data.data.attributes.Huile)
                setIso(res.data.data.attributes.Qualite)
                setSatisfaction(res.data.data.attributes.Satisfaction)
            }catch(err){
                console.error(err)
            }
        }
        action()
    },[])
    return (
        <div className={style.main}>
            <h3>Quelques chiffres sur ESMD</h3>
            <div className={style.chiffre}>
                <div className={style.item}>
                    <Image src={epiceI} alt="Variétés épices"/>
                    <h4>{epice}</h4>
                    <p>Variétés épices</p>
                </div>
                <div className={style.item}>
                    <Image src={huileT} alt="Huiles essentielles"/>
                    <h4>{huile}</h4>
                    <p>Huiles essentielles</p>
                </div>
                <div className={style.item}>
                    <Image src={isoT} alt="Qualité"/>
                    <h4>{iso}</h4>
                    <p>Qualité</p>
                </div>
                <div className={style.item}>
                    <Image src={satT} alt="Satisfaction"/>
                    <h4>{satisfaction}</h4>
                    <p>Satisfaction</p>
                </div>
            </div>
        </div>
    )
}

export default Chiffre;
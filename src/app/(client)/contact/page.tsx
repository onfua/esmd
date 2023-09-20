'use client'

import { FormEvent, useState, useRef, useEffect } from 'react'
import styles from './contactez.module.css'
import Image from 'next/image'
import drapt from '@/assets/images/drap.png'
import frame from '@/assets/images/Frame.png'
import call from '@/assets/images/call.svg'
import location from '@/assets/images/location.svg'
import sms from '@/assets/images/sms.svg'
import rectangle from '@/assets/images/Rectangle 1280.png'
import api from '@/utils/axiosConnect'
import { Toast } from 'primereact/toast';

type contact = {
    tel : string,
    mail : string,
    address : string
}

const Contactez =()=>{
    const [countryCode , setCountryCode] = useState<string>('+33')
    const [phoneNumber , setPhoneNumber] = useState<string>(countryCode)
    const [nom,setNom] = useState<string>('')
    const [prenom,setPrenom] = useState<string>('')
    const [mail,setMail] = useState<string>('')
    const [msg,setMsg] = useState<string>('')
    const [drap, setDrap] = useState<any>(<Image src={drapt} alt="drap" className={styles.drap}/>)
    const [contact,setContact] = useState<contact>({
        tel :'',
        mail:'',
        address : ''
    })

    const toast = useRef<Toast>(null);

    const drapeau = [
        <Image src={drapt} alt="france" className={styles.drap} key='france'/>
    ]

    useEffect(()=>{
        const action = async ()=>{
            try{
                const res = await api.get('api/contact')
                setContact({
                    tel : res.data.data.attributes.Telephone,
                    mail : res.data.data.attributes.Email,
                    address : res.data.data.attributes.Adresse
                })
            }catch(err){
                console.error(err)
            }
        }
        action()
    },[])

    const handelCountryCodeChange =(e : any)=>{
        setCountryCode(e.target.value)
        setPhoneNumber(e.target.value)
        const index = e.target.value

        switch(index){
            case '+33':
                setDrap(drapeau[0])
                break;
            default:
                setDrap('')
                break;             
        }
    }

    const submit = async (e : FormEvent) => {
        e.preventDefault()
        if (nom.trim()!=='' && prenom.trim()!=='' && msg.trim()!=='' && mail.trim()!==''){
            try{
                await api.post('api/messages',{
                    data : {
                        Nom : nom,
                        Prenom : prenom,
                        Email : mail,
                        Telephone : phoneNumber,
                        Message : msg
                    }
                })
                setNom('')
                setPrenom('')
                setPhoneNumber(countryCode)
                setMail('')
                setMsg('')
                toast.current?.show({ severity: 'success', summary: 'Info', detail: 'Votre message a été bien envoyé' })
            }catch(err){
                toast.current?.show({ severity: 'error', summary: 'Erreur', detail: 'Problème lié au serveur. Réessayez plus tard!' })
            }
            
        }else{
            toast.current?.show({ severity: 'warn', summary: 'Info', detail: 'Veuillez completer votre nom, prenom, mail et votre message au moins' })
        }
    }

    return(
        <>
        
        <div className={`${styles.bgMain} position-relative`}>
        <Toast ref={toast} />
            <Image className={styles.frame} src={frame} alt="frame" />
           <div className={styles.myContainer}>
                <h1 className={styles.h1Title}>Contactez-nous</h1>
                <p className={styles.myPara}>Nous serions ravis de vous entendre! Que vous ayez des questions sur nos produits, besoins de conseils pour choisir la bonne épices ou huiles essentielles, notre équipe est là pour vous</p>
                <ul className={styles.myList}>
                    <li><Image src={sms} alt='email'/><span className={styles.cont}> {contact.mail}</span></li>
                    <li><Image src={call} alt='call'/><span className={styles.cont}> {contact.tel}</span></li>
                    <li><Image src={location} alt='location'/><span className={styles.cont}> {contact.address}</span></li>
                </ul>
           </div>
            <div className={`${styles.formulaire}`}>
                <h2 className={styles.sendM}>Envoyer un message</h2>
                <form onSubmit={submit}>
                   <div className="row">
                        <div className={`${styles.nom} col-lg-6 col-md-12 col-sm-6 pe-lg-1`}>
                            <label htmlFor="nom" className={styles.label}>Nom</label>
                            <input type="text" id='nom' className={styles.input} value={nom} onChange={(e)=>setNom(e.target.value)}/>
                        </div>
                        <div className={`${styles.firstName} col-lg-6 col-md-12 col-sm-6 ps-lg-1`}>
                            <label htmlFor="prenom" className={styles.label}>Prénom</label>
                            <input type="text" id='prenom' className={styles.input} value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                        </div>
                   </div>
                    <div className={styles.email}>
                        <label htmlFor="mail" className={styles.label}>Adresse e-mail</label>
                        <input type="mail"id='mail' className={styles.input} value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    </div>
                    <div className={`${styles.phone} position-relative`}>
                        <label htmlFor="tel" className={styles.label}>Numéro Téléphone</label>
                        {drap}
                        <select name="tel" id="tel" onChange={handelCountryCodeChange} className={styles.country}>
                            <option value="+33">  France</option>
                            <option value="+261">Madagascar</option>
                        </select>
                        <input type="tel" id='tel' 
                        value ={phoneNumber}
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        className={styles.tel}
                        />
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea name="message" id="message" className={`${styles.myTextarea} ${styles.textarea}`} value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className={styles.myButton}>Envoyer</button>                 
                </form>
            </div>
        </div>
        <Image src={rectangle} className={`${styles.imageFooter} w-100`} alt=""  />
      </>
    )
}
export default Contactez
'use client'

import { useState } from 'react'
import styles from './contactez.module.css'
import Image from 'next/image'
import drapt from '@/assets/images/drap.png'
import frame from '@/assets/images/Frame.png'
import call from '@/assets/images/call.svg'
import location from '@/assets/images/location.svg'
import sms from '@/assets/images/sms.svg'
import rectangle from '@/assets/images/Rectangle 1280.png'

const Contactez =()=>{
    const [countryCode , setCountryCode] = useState<any>('+33')
    const [phoneNumber , setPhoneNumber] = useState<any>(countryCode)
    const [drap, setDrap] = useState<any>(<Image src={drapt} alt="drap" className={styles.drap}/>)

    const drapeau = [
        <Image src={drapt} alt="france" className={styles.drap} key='france'/>
    ]

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
    const handelPhoneNumberChange =(e : any)=>{
        setPhoneNumber(e.target.value)
    }

    return(
        <>
        <div className={`${styles.bgMain} position-relative`}>
            <Image className={styles.frame} src={frame} alt="frame" />
           <div className={styles.myContainer}>
                <h1 className={styles.h1Title}>Contactez-nous</h1>
                <p className={styles.myPara}>Nous serions ravis de vous entendre! Que vous ayez des questions sur nos produits, besoins de conseils pour choisir la bonne épices ou huiles essentielles, notre équipe est là pour vous</p>
                <ul className={styles.myList}>
                    <li><Image src={sms} alt='email'/><span className={styles.cont}> contact@esmdexport.com</span></li>
                    <li><Image src={call} alt='call'/><span className={styles.cont}> +261 33 12 567 89</span></li>
                    <li><Image src={location} alt='location'/><span className={styles.cont}> 5 rue Pleyel, Antananarivo, Madagascar</span></li>
                </ul>
           </div>
            <div className={`${styles.formulaire}`}>
                <h2 className={styles.sendM}>Envoyer un message</h2>
                <form onSubmit={(e)=> e.preventDefault()}>
                   <div className="row">
                        <div className={`${styles.nom} col-lg-6 col-md-12 col-sm-6 pe-lg-1`}>
                            <label htmlFor="nom" className={styles.label}>Nom</label>
                            <input type="text" id='nom' className={styles.input}/>
                        </div>
                        <div className={`${styles.firstName} col-lg-6 col-md-12 col-sm-6 ps-lg-1`}>
                            <label htmlFor="prenom" className={styles.label}>Prénom</label>
                            <input type="text" id='prenom' className={styles.input}/>
                        </div>
                   </div>
                    <div className={styles.email}>
                        <label htmlFor="mail" className={styles.label}>Adresse e-mail</label>
                        <input type="mail"id='mail' className={styles.input}/>
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
                        onChange={handelPhoneNumberChange}
                        className={styles.tel}
                        />
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="message" className={styles.label}>Message</label>
                        <textarea name="message" id="message" className={`${styles.myTextarea} ${styles.textarea}`}></textarea>
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
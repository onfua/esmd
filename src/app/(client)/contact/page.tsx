'use client'

import { useState } from 'react'
import styles from './contactez.module.css'

const Contactez =()=>{
    const [countryCode , setCountryCode] = useState<any>('+33')
    const [phoneNumber , setPhoneNumber] = useState<any>(countryCode)
    const [drap, setDrap] = useState<any>(<img src="/images/drap.png" alt="drap" className={styles.drap}/>)

    const drapeau = [
        <img src="/images/drap.png" alt="france" className={styles.drap} />
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
            <img className={styles.frame} src="/images/Frame.png" alt="frame" />
           <div className={styles.myContainer}>
                <h1 className={styles.h1Title}>Contactez-nous</h1>
                <p className={styles.myPara}>Nous serions ravis de vous entendre! Que vous ayez des questions sur nos produits, besoins de conseils pour choisir la bonne épices ou huiles essentielles, notre équipe est là pour vous</p>
                <ul className={styles.myList}>
                    <li><img src="/images/sms.svg" alt='email'/> contact@esmdexport.com</li>
                    <li><img src="/images/call.svg" alt='call'/> +261 33 12 567 89</li>
                    <li><img src="/images/location.svg" alt='location'/> 5 rue Pleyel, Antananarivo, Madagascar</li>
                </ul>
           </div>
            <div className={`${styles.formulaire}`}>
                <h2>Envoyer un message</h2>
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
        <img src="/images/Rectangle 1280.png" className={`${styles.imageFooter} w-100`} alt=""  />
      </>
    )
}
export default Contactez
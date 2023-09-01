import styles from './histoire.module.css'
import Image from 'next/image'
import image1 from '@/assets/images/Rectangle 4397.png'
import image2 from '@/assets/images/Rectangle 4399.png'
import image3 from '@/assets/images/Rectangle 4401.png'
import image4 from '@/assets/images/Rectangle 4402.png'
import Title from '@/components/title/title'
const Histoire =()=>{
    const article = [
        {
            images : image1,
            date : '2005',
            titre : 'Creation de ESMD',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },
        {
            images : image2,
            date : '2007',
            titre : 'Elargit sa gamme',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },
        {
            images : image3,
            date : '2010',
            titre : 'Premier magasin dans la ville',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },{
            images : image4,
            date : '2023',
            titre : 'Developpement à l\'intenternational',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        }
    ]

    return(
        
        <div>
            <Title title="Notre histoire"></Title>
            <section className={styles.section}>
                <p className={styles.descri}>Nous croyons que les épices et les huilles essentielles ne sont pas seulement des ingrédients, mais une porte d&apos;entrée vers un monde de saveurs et de bien-être.</p>
            </section>
            <div className={`container-fluid  position-relative ${styles.container}`}> 
                {
                    // eslint-disable-next-line array-callback-return
                    article.map( (value, index) =>{
                        return(
                            <div className={`row d-flex ${styles.article}`} key={index} >
                                <Image className={styles.image} src={value.images} alt="images" width={448} height={446}/>
                                <div className={`${styles.text} p-lg-5 ms-3`}>
                                    <h2 className={`${styles.myTitle} mt-lg-2`}>{value.date}</h2>
                                    <h3 className={`${styles.sousTitre} mt-lg-4`} >{value.titre}</h3>
                                    <p className={styles.myPara}>{value.para}</p>
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
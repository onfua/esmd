import styles from './histoire.module.css'
import Image from 'next/image'
const Histoire =()=>{
    const article = [
        {
            images : '/images/Rectangle 4397.png',
            date : '2005',
            titre : 'Creation de ESMD',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },
        {
            images : '/images/Rectangle 4399.png',
            date : '2007',
            titre : 'Elargit sa gamme',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },
        {
            images : '/images/Rectangle 4401.png',
            date : '2010',
            titre : 'Premier magasin dans la ville',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },{
            images : '/images/Rectangle 4402.png',
            date : '2023',
            titre : 'Developpement à \'intenternational',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        },{
            images : '/images/Rectangle 4402.png',
            date : '2024',
            titre : 'Developpement à l\'intenternational',
            para : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci inventore expedita rerum ullam debitis. Animi consequatur veritatis culpa aperiam quasi reiciendis fugit porro cupiditate, fugiat dicta dignissimos vel id commodi.'
        }
    ]
    const bg1 = '/images/Group 2.png'
    const bg2 = '/images/Group 1.png'

    return(
        
        <div>
            <header className={`${styles.header} ${styles.bgHead}`} >
                <div className={styles.fond} 
                    style={{
                        backgroundImage: `url('${bg1}')`,
                        backgroundPosition: 'left bottom',
                    }}
                >
                    <div className={styles.fond}
                        style={{
                            backgroundImage: `url('${bg2}')`,
                            backgroundPosition: 'right bottom',
                        }}
                    >
                        <h2 className={styles.myTitle}>Notre histoire</h2>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
                <p className={styles.descri}>Nous croyons que les épices et les huilles essentielles ne sont pas seulement des ingrédients, mais une porte d&apos;entrée vers un monde de saveurs et de bien-être.</p>
            </section>
            <div className={`container-fluid  position-relative ${styles.container}`}> 
                {
                    // eslint-disable-next-line array-callback-return
                    article.map( (value, index) =>{
                        return(
                            <div className={`row d-flex ${styles.article}`} key={index} >
                                <Image className={styles.image} src={value.images} alt="images"/>
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
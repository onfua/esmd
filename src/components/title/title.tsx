import styles from './title.module.css'

const Title = (props : {title : string}) => {
    const bg1 = '/images/Group 2.png'
    const bg2 = '/images/Group 1.png'
    return (
        <>
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
                        <h2 className={styles.myTitle}>{props.title}</h2>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Title;
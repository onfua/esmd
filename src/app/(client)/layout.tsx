import layoutStyle from './layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Image from 'next/image'
import searchIcon from "../../assets/images/icons/search.svg"
import SideBarClient from '../../components/menuSidebar/menuSideBar'

const LeftLink : React.FC = () => {
    return (
        <>
            <Link href="/" className={layoutStyle.navlink}>Accueil</Link>
            <Link href="/about" className={layoutStyle.navlink}>A propos</Link>
            <Link href="/products" className={layoutStyle.navlink}>Nos produits</Link>
        </>
    )
} 

const RightLink : React.FC = () => {
    return (<>
        <Link href="/contact" className={layoutStyle.navlink}>Contact</Link>
        {null?<Link href="/search" className={layoutStyle.navlink}><Image src={searchIcon} alt="search icon"></Image></Link>:<></>}
        
    </>)
}

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <nav className={layoutStyle.nav} >
                <div className={layoutStyle.navButton}>
                    <LeftLink/>
                </div>
                <div className={layoutStyle.esmdExport}>
                    <h1>ESMD</h1>
                    <h1>Export</h1>
                </div>
                <div className={layoutStyle.navButton}>
                    <RightLink/>
                </div>
                <SideBarClient/>
            </nav>
            <main className={layoutStyle.main}>
                {children}
            </main>
            <footer className={layoutStyle.footer}>
                <div className={layoutStyle.footerHead}>
                    <div className={layoutStyle.esmdExport}>
                        <h1>ESMD</h1>
                        <h1>Export</h1>
                    </div>
                    <div className={layoutStyle.footerNav}>
                        <h1>explorer</h1>
                        <Link href={'/'} className={layoutStyle.footerLink}>Accueil</Link>
                        <Link href={'/about'} className={layoutStyle.footerLink}>Qui sommes-nous</Link>
                        <Link href={'/history'} className={layoutStyle.footerLink}>Notre histoire</Link>
                        <Link href={'/blog'} className={layoutStyle.footerLink}>Blog</Link>
                        <Link href={'/faq'} className={layoutStyle.footerLink}>Foire aux questions</Link>
                    </div>
                    {
                        null?<div className={layoutStyle.footerNav}>
                        <h1>shop</h1>
                        <Link href={'/products/spices'} className={layoutStyle.footerLink}>Epices</Link>
                        <Link href={'/products/oil'} className={layoutStyle.footerLink}>Huiles essentielles</Link>
                        <Link href={'/products/floralwaters'} className={layoutStyle.footerLink}>Eaux florales</Link>
                    </div>:<></>
                    }
                    
                    <div className={layoutStyle.footerNav}>
                        <h1>contact</h1>
                        <p className={layoutStyle.footerLink}>+261 33 09 631 68</p>
                        <p className={layoutStyle.footerLink}>esmd.exportmg@gmail.com</p>
                    </div>
                </div>
                <hr />
                <p>© ESMD Export - Tous droits réservés • Mentions légales • Cookies</p>
            </footer>
        </>
    )
}

export default DefaultLayout
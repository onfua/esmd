import layoutStyle from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import searchIcon from "../../assets/images/icons/search.svg"
import userIcon from "../../assets/images/icons/add-user.svg"
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
        <Link href="/search" className={layoutStyle.navlink}><Image src={searchIcon} alt="search icon"></Image></Link>
        
    </>)
}

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <nav className={layoutStyle.nav}>
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
        </>
    )
}

export default DefaultLayout
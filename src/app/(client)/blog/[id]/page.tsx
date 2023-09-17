'use client'
import { useState , useEffect } from 'react'
import style from './b.module.css'
import { StaticImageData } from 'next/image'
import imp from '@/assets/images/Rectangle 1278.png'
import Image from 'next/image'
import RecentArticle from '@/components/recentArticle/recentArticle'
import api,{host} from '@/utils/axiosConnect'

type Data = {
    image : string | StaticImageData,
    title : string,
    date : Date,
    images : string[] | StaticImageData[],
    contenu : string,
    id : string | number
}

const BlogId = ({params} : {params : {id : number | string}}) => {
const convertContenu = (contenu : string) : string => {
    let result = ""
    const tmp = contenu.split('\n')
    const countDiez = (t : string) : number => {
        let count = 0
        const s = t.trim()
        if (s.length>0){
            if (s[0]==="#"){
                count++
                for (let i=1;i<s.length;i++){
                    if(s[i-1]==="#" && s[i]==="#"){
                        count++
                    }else{
                        break
                    }
                }
            }
        }
        return count
    }
    result = tmp.map((e : string)=>{
        const c = countDiez(e)
        return c>0?`<h${c}>${e.substring(c,e.length).trim()}</h${c}>`:`<p>${e.trim()}</p>`
    }).join('')
    return result
}

    const [data,setData] = useState<Data|undefined|null>()

    useEffect(()=>{
        const action = async() => {
            try{
                const response = await api.get(`api/blogs/${params.id}?populate=*`)
                if (response.data.data){
                    const tmp = response.data.data
                    const images = tmp.attributes.Images.data?tmp.attributes.Images.data.map((e : any)=>{
                        return host+e.attributes.url
                    }):[]
                    setData({
                        id : tmp.id,
                        title : tmp.attributes.Titre,
                        date : new Date(tmp.attributes.Publie),
                        image : host+tmp.attributes.Image.data.attributes.url,
                        contenu : tmp.attributes.Contenu,
                        images : images
                    })
                }
            }catch(e){
                console.error(e)
            }
        }
        action()
    },[])

    return data?(
        <>
            <div className={style.header}>
                <h1>Blog   /  {data.title}</h1>
            </div>
            <div className={style.blog}>
                <h1>{data?.title}</h1>
                <h3>Publié le {data.date.toLocaleDateString()}</h3>
                <div className={style.image}>
                    <Image src={data.image} alt={data.title} width={874} height={535}/>
                </div>
                <div className={style.content} dangerouslySetInnerHTML={{ __html: convertContenu(data.contenu) }}></div>
                <div className={style.images}>
                    {
                        data.images.length>0?data.images.map((e : any)=>{
                            return <Image src={e} alt='galerie' width={341} height={251}/>
                        }):<></>
                    }
                </div>
            </div>
            <RecentArticle></RecentArticle>
        </>
    ):<></>
}

export default BlogId
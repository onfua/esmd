'use client'

import { useState , useEffect } from "react"
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation'
import api from "@/utils/axiosConnect";
import Prod from "./prod/prod";

type Repo = {
    name: string
    image: string | StaticImageData,
    id : number | string
}

type Repos = Repo[]

const ProductsP = () => {
    const router = useRouter()
    const [categorie,setCategorie] = useState<string[]>([])

    useEffect(()=>{
        const action = async () => {
            try{
                const res = await api.get('api/type-de-produits')
                setCategorie(res.data.data.map((e : any)=>{
                    return e.attributes.Categorie
                }))
            }catch(err){
                console.error(err)
            }
        }
        action()
    },[])
    return (
        <>
            {
                categorie.map((e : string, index : number)=>{
                    return <Prod key={index} categorie={e}></Prod>
                })
            }
        </>
    )
}

export default ProductsP;
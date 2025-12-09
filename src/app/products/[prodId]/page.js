import {Metadata} from 'next'
import { resolve } from 'styled-jsx/css'

export const generateMetadata = async ({params}) => {
    const prodId = (await params).prodId
    // here we are just simulating to fetch data from an api
    const title = await new Promise ((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${prodId}`)
        }, 100);
    })
    return {
        title : `product ${title}`
    }
}

export default async function product({params}) {
    const productId = (await params).prodId // here we put .prodId because the name of the dynamic folder is [prodId]

    return <h1>details of product {productId}</h1>
}
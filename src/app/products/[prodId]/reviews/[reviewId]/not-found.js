// we can specify a not found page for each path 
// by placing the not-found file inside the route folder
"use client"
import { usePathname } from "next/navigation"

export default function NotFound() {
    // we can't pass parameters to not found pages
    // so we do a workaround by using usePathname 
    const pathname = usePathname()

    const productId = pathname.split('/')[2]
    const reviewId = pathname.split('/')[4]

    return (<>
            <h1>review {reviewId} is not found for product {productId}</h1>
        </>)
    
}
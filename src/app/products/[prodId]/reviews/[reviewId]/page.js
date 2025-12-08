import { notFound } from "next/navigation"

export default async function ReviewDetails({params}) {
    const {prodId, reviewId} = await params

    if(reviewId > 1000) return notFound()
    return <h1>review {reviewId} of product {prodId} details here</h1>
}
export default async function ReviewDetails({params}) {
    const {prodId, reviewId} = await params
    return <h1>review {reviewId} of product {prodId} details here</h1>
}
export default async function product({params}) {
    const productId = (await params).prodId // here we put .prodId because the name of the dynamic folder is [prodId]
    return <h1>details of product {productId}</h1>
}
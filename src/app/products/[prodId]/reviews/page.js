export default async function Reviews({params}) {
    const productId = (await params).prodId
    return <h1>This is reviews page for product {productId}, you can access individual reviews by their id</h1>
}
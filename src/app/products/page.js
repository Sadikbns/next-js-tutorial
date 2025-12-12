import MyButton from "./myButton"

export const metadata = {
    title: "Products"
}

function Products() {
    return (
        <>
            <h1>list of Products</h1>
            <h2>product 1</h2>
            <h2>product 2</h2>
            <h2>product 3</h2>

            {/* here we are going to use a client component inside a server component 
            note that if we used a client functionality like hooks it will throw an error because it is a server component
            so we are going to create a client compo as a file then import it and use it  */}
            <MyButton/>
        </>
    )
}

export default Products
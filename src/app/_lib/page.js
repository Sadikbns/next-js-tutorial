// every folder that starts with '_' is a private folder that will not be used in routing
// and every subfolder inside of it

export default function libPage() {
    return <h1>this page will not appear on the browser because it is inside a private folder _lib</h1>
}
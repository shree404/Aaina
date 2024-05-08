import ProductImages from "../Component/ProductLehenga/Images";
import Nav from "../Component/LandingPage/Nav";
import Footer from "../Component/LandingPage/Footer";
import RelatedProduct from "../Component/ProductLehenga/Relatedproduct";




function ProductLehenga(){
    return(
        <>
        <Nav/>
        <ProductImages/>
        <RelatedProduct/>
        <Footer/>
        </>
    )
}

export default ProductLehenga;
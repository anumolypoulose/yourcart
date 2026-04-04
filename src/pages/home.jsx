import banner1 from "../assets/images/banner1.png";
import shop2 from "../assets/images/shop2.jpg";
import Productcard from "../components/productcard";
import { useEffect , useState } from "react";
function home(){
    const [productItems, setProducts] = useState([]);
    async function fetchProduct(){
        try{
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    },[]);
    return(
        <>
            <div className="relative">
                <img src={shop2} className="w-full h-[380px] object-cover object-center"/>
            </div>
            <div className="max-w-5xl lg:max-w-7xl px-6 py-[15px] mx-auto my-[30px]">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px]">
                    {productItems.map((item) => (
                        <Productcard key={item.id} product={item} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default home;
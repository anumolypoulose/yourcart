import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Starrating from "../components/starrating";
function ProductDetails(){
    const { id } = useParams();
    const [product , setProduct] = useState(true);
    const [review , setreview] = useState([]);
    async function fetchData(){
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
    }
    if(!product){
        console.log("data is loading")
    }
    useEffect(() => {
        fetchData();
    },[id])
    return(
        <>
            <div className="max-w-5xl lg:max-w-7xl px-6 py-[15px] mx-auto my-[30px]">
                <div className="flex gap-10 mb-6">
                    <div className="border p-3 rounded-md">
                        <img src={product.thumbnail} className="max-w-[500px]"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2> 
                        <h3 className="mb-2 font-medium text-lg">{product.brand}</h3>
                        <p className="mb-2 mt-2">{product.description}</p> 
                        <p className="text-2xl font-medium mb-1">${product.price}</p>
                        <Starrating rating={Math.round(product.rating)}></Starrating>
                        <p className="text-lg mb-2 font-medium mt-2">Discount: {product.discountPercentage}%</p>
                        <p className="mb-2">{product.warrantyInformation}</p>   
                        <p className="mb-4">{product.shippingInformation}</p>
                        <button className="flex items-center px-5 py-[7px] rounded-md gap-1 text-white bg-[#061344] justify-center mt-auto">
                            <span className="material-icons-outlined text-[20px]">
                                add_shopping_cart
                            </span>
                            <span className="uppercase text-xs font-semibold">Add to cart</span>
                        </button>  
                    </div>
                </div>
                <h2 className="text-lg font-bold">Reviews</h2>
                <div className="">
                    
                       { product.reviews?.map((review,index) => (
                           <>
                                <div className="py-4 mb-1" key={index}>
                                    <h3 className="font-medium text-md mb-1">{review.reviewerName}</h3>
                                    <Starrating rating={Math.round(review.rating)}></Starrating>
                                    <p className="mt-1 mb-2 text-sm">
                                        {review.comment}
                                    </p>
                                    <p className="mt-1 text-xs">
                                        Posted on: {review.date}
                                    </p>
                                </div>
                           </>
                       ))

                       }
                   
                </div>
            </div>
            
        </>
    )
}
export default ProductDetails;
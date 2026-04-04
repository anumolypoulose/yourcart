import { useEffect , useState } from "react";
import Starrating from "../components/starrating";
import { useNavigate } from "react-router-dom";
function Productcard({product}){
    const navigate = useNavigate();
    return(
        <>  
            <div className="border p-[6px] flex flex-col rounded-md">
                <div>
                    <div className="text-center mb-3 bg-[#ffd6d64a] py-7 rounded-sm border" onClick={() => navigate(`/product/${product.id}`)}>
                        <img src={product.thumbnail} className="w-full max-w-[100px] mx-auto"/>
                    </div>
                    <h3 className="text-center font-semibold mb-2">{product.title}</h3>
                </div>
                <div className="mt-auto">
                    <p className="text-center text-base mb-1 font-black">${product.price}</p>
                    <div className="flex justify-center align-center gap-[2px] text-xl mb-1">
                        <Starrating rating={Math.round(product.rating)}></Starrating>
                    </div>
                    <button className="flex items-center px-3 py-[7px] rounded-md gap-1 text-white bg-[#061344] w-full justify-center mt-auto">
                        <span className="material-icons-outlined text-[20px]">
                            add_shopping_cart
                        </span>
                        <span className="uppercase text-xs">Add to cart</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Productcard;
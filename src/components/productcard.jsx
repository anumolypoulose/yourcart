import { useEffect , useState } from "react";
import Starrating from "../components/starrating";
function Productcard({product}){
    return(
        <>  
            <div className="border p-[10px] flex flex-col rounded-md">
                <div className="text-center mb-3 bg-[#ffd6d64a] py-7 rounded-sm">
                    <img src={product.thumbnail} className="w-full max-w-[150px] mx-auto"/>
                </div>
                <div className="mb-2">
                    <h3 className="text-center font-semibold mb-2">{product.title}</h3>
                    <p className="text-center text-base mb-1 font-black">${product.price}</p>
                    <div className="flex justify-center align-center gap-[2px] text-xl mb-1">
                        <Starrating rating={Math.round(product.rating)}></Starrating>
                    </div>
                </div>
                <button className="flex items-center px-3 py-[7px] rounded-sm gap-1 m-auto bg-[#ffb38c] w-full justify-center mt-auto">
                    <span class="material-icons text-[20px]">
                        add_shopping_cart
                    </span>
                    <span className="uppercase text-xs font-medium">Add to cart</span>
                </button>
            </div>
        </>
    )
}
export default Productcard;
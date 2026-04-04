function Starrating({rating}){
    return(
        <>
            {[1,2,3,4,5].map((star) => {
               if(star < rating){
                return <span key={star} className="text-[#eb9e2b] text-2xl">★</span>;
               }else{
                return <span key={star} className="text-[#ccc] text-2xl">★</span>;
               }
               
            })}
        </>
    )
}
export default Starrating;
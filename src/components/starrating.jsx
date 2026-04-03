function Starrating({rating}){
    return(
        <>
            {[1,2,3,4,5].map((star) => {
               if(star < rating){
                return <span key={star} className="text-[#eb9e2b]">★</span>;
               }else{
                return <span key={star} className="text-[#ccc]">★</span>;
               }
               
            })}
        </>
    )
}
export default Starrating;
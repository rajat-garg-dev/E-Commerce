import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const carasouledata = [{url:"https://img.freepik.com/free-vector/instagram-carousel-templates_23-2148792298.jpg?w=900&t=st=1708932760~exp=1708933360~hmac=40f2d7755f8bc40ee5e52ecb939f719ab38c7f7c8155fb092212e1808ff658e5"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbK0sMywLAsl7GbvioEQawytX1zhTR7CPrw&usqp=CAU"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgptKM0gLWhQYd4DAUN3AO-OFzrlSWQTOvQA&usqp=CAU"},{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoIXQ9VaFrjrOFp_QR03UTXh5lYXYXHi78A&usqp=CAU"}]
const items = carasouledata.map((item)=>{
    return(
        <img  src={item.url} className='w-full object-cover h-[400px]' alt="img" />
    )
})
    


const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);
export default MainCarousel
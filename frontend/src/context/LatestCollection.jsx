import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fugit odio, consequatur quibusdam, culpa officiis ducimus est voluptatem dolor nobis animi laudantium alias facilis fugiat necessitatibus perferendis maiores quis porro.
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((items,index)=>(
                  <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>  
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
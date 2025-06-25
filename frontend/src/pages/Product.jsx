import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false)
  const [image,setImage]= useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () =>{

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData()
  },[productId, products])
  return productData? (
    <div className='border-t border-gray-400 pt-10 transition-opacity ease-in-out duration-1000 opacity-100'>
       {/* Product Data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* Product Images */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
              {
                productData.image.map((item, index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '  />
                ))
              }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image}/>
            </div>
          </div>
          {/* Product Info */}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap=1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon}  alt="" className="w-3 5" />
                <p className='pl-2'>(124)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency} {productData.price} </p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description} </p>
             <div className='flex flex-col gap-4 my-8'>
                <p>Select type</p>
                <div className='flex gap-2'>
                 {productData.sizes.map((item, index) => (
                    <button onClick={()=>setSize(item)} className={`cursor-pointer py-2 px-4 bg-gray-100  ${item === size ? 'border border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
                </div>
             </div>
             <button onClick={()=>addToCart(productData._id, size)} className='bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
             <hr className='mt-8 sm:w-4/5'/>
             <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Products</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
             </div>
          </div>
        </div>
        {/* Decription and Review Section */}
        <div className='mt-20'>
          <div className='flex'>
             <p className='border border-gray-200 px-5 py-3 text-sm'>Description</p>
             <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews(124)</p>
          </div>
          <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsam repellat quo, sint ab consequuntur aperiam id reiciendis ex veritatis repudiandae earum voluptate atque provident incidunt deleniti dolores recusandae a.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut enim consequuntur nam, in culpa maiores esse soluta earum dicta facilis neque deserunt sint ducimus iusto, vel ipsa repellendus. Unde, possimus?</p>
          </div>
        </div>
        {/* Display related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) :<div className='opacity=0'></div>
}

export default Product
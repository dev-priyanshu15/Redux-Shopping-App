// import React from 'react'

// const Product = () => {
//   return (
//     <div>Product</div>
//   )
// }

// export default Product
import React from 'react';
import { Products } from '../data'
import { useSelector, useDispatch } from 'react-redux';
import {addToCart, selecCartItems} from '../redux/cartSlice'


import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const dispatch=useDispatch()
    const cartItem=useSelector(selecCartItems)
    console.log("Cart Item",cartItem)

    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
        toast.success('🦄 Item Added To Cart!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }
    return (
        <div>
            <ToastContainer />
            <h1>
                <div className="container">
                    <div className="row">
                        {
                            Products.map((item) => (
                                <div key={item.id} className="container col-md-4 my-5">
                                    <div className="card bg-dark" style={{ width: '18rem' }}>
                                        <div className='p-3 d-flex justify-content-center align-items-center'>
                                            <img src={item.imgSrc} className="card-img-top" alt="..." style={{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '10px'

                                            }} />
                                        </div>
                                        <div className="card-body text-light text-center">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <button className="btn btn-primary mx-3">{item.price} ₹</button>
                                            <button className="btn btn-warning" onClick={()=>handleAddToCart(item)}>Add To Cart</button>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </h1>
        </div>
    );
};

export default Product;
//addto cart kaha kar reh hai ppoduct par to toastify wah alagaye first
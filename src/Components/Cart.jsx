import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, selecCartItems } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selecCartItems)
    console.log("Cart Item", cartItem)
    return (
        <>
        <ToastContainer />
            <div className="container text-center my-5" style={{ width: "700px" }}>
                {
                    cartItem.length == 0 && (
                        <>
                            <h1>Your Cart is Empty</h1>
                            <Link to={'/'} className="btn btn-warning">Continue Shopping...</Link>
                        </>
                    )}

                {
                    cartItem.map((item) => (

                        <div key={item.id} className="container my-5">
                            <div className="card mb- bg-dark text-light text-center" style={{ width: "649px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <div className='p-3'>
                                            <img src={item.imgSrc} className="img-fluid rounded-star t" alt="..." style={{
                                                borderRadius: '10px'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.title}</p>
                                            <button className="btn btn-primary mx-3">{item.price} ₹</button>
                                            <button className="btn btn-warning">Buy Now</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )



                    )
                }

                {cartItem.length != 0 && (
                    <button onClick={() => {dispatch(clearCart())
                        toast.success('Cart Cleared!', {
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
                    } }
                    className="btn btn-warning">Clear Cart</button>

                )}


            </div>

        </>
    );
};

export default Cart;

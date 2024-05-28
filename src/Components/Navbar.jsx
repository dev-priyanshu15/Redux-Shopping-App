// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//     <div className="nav_bar"></div>



//     </>
//   )
// };

// export default Navbar;
//.nav_bar se div wala line aa jayega 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector} from 'react-redux';
import {selecCartItems,selectCartTotalPrice} from '../redux/cartSlice'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const cartItem=useSelector(selecCartItems)
    const totalPrice=useSelector(selectCartTotalPrice)
    return (
        <>
            <div className="nav_bar sticky-top">
                <Link to='/' className="left" style={{textDecoration:"none",color:'white'}}>
                    <h3>
                        Redux - Toolkit
                    </h3>
                </Link>
                <div className="middle">

                    <button type="button" className="btn btn-warning">

                        <h4> Cart Items Total Price= {totalPrice} ₹</h4>
                    </button>


                </div>
                <Link to='/cart' className="right">
                    <button type="button" className="btn btn-primary position-relative">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItem.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>

                </Link>
            </div>
        </>
    );
};

export default Navbar;
//.left .middle .right kiye ye
//dusre wale me button.btn.btn-warrning
//button right me badge positioning code then ctrl+f class phir arrow className replace all
//cart pe  click karne par saara card dikhna chaiye iskeliye reacr react-router-dom install karna padega npm se terminal pe  react-router-dom
// react toastify
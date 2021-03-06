import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"

const Cart = (props) => {
        return (
            <div className="navbar-brand">
                <Link to={{pathname: `/cart/${props.user.id}`}}>
                    <button type="button" className="btn btn-dark">
                        <i className="fas fa-shopping-basket"></i>
                    </button>
                </Link>
            </div>
        )
    }


export default Cart
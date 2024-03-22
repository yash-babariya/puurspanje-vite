import './header.scss';
import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png'
import { FaRegUser } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <header>
                    <div className="logo">
                        <img src={logo} alt="company_LOGO" />
                        <p>Tasty Treat</p>
                    </div>
                    <nav>
                        <a className='menu-items' href='link'>Home</a>
                        <a className='menu-items' href='link'>Foods</a>
                        <a className='menu-items' href='link'>Cart</a>
                        <a className='menu-items' href='link'>Contact</a>
                    </nav>
                    <div className="user-icons">
                        <FaOpencart className='icons' />
                        <FaRegUser className="icons" />
                    </div>
                </header>
            </div>
        </div>
    )
}

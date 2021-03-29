import React from 'react'
//images
import backGround from '../assets/images/background/background.svg'
import Logo from '../assets/images/Logo'
import Phone from '../assets/images/phone'
import IconMenu from '../assets/images/iconMenu'
//styles
import {WrapMain} from './index.styles'
export default function Main() {
    const getXYofDiv = () => {
        let elem = document.querySelector('section');
        let rect = elem.getBoundingClientRect();
        for (var key in rect) {
        if(typeof rect[key] !== 'function') {
            let para = document.createElement('p');
            para.textContent  = `${ key } : ${ rect[key] }`;
            document.body.appendChild(para);
        }
    }
    // console.log('element rect', rect)
    }
    return (
        <WrapMain backGround={backGround}>
            <div className="wrap-content">
                <div className="header-menu">
                    <Logo />
                    <div className="stripe-menu"   >
                        <button className="btn-menu" onClick={getXYofDiv}>Products
                            <span className="hover-content">
                                Products
                                <div className="wrap-icon">
                                    <div>
                                        <IconMenu />
                                        Payment
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Terminal
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Connect
                                    </div>
                                </div>
                            </span>
                        </button>
                        <button className="btn-menu" onClick={getXYofDiv}>Developers
                            <span className="hover-content">
                                Developers
                                <div className="wrap-icon">
                                    <div>
                                        <IconMenu />
                                        Plugin
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Library
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Help
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Billing
                                    </div>
                                </div>
                            </span>
                        </button>
                        <button className="btn-menu" onClick={getXYofDiv}>Company
                            <span className="hover-content">
                                Company
                                <div className="wrap-icon">
                                    <div>
                                        <IconMenu />
                                        About
                                    </div>
                                    <div>
                                        <IconMenu />
                                        Customer
                                    </div>
                                </div>
                            </span></button>
                    </div>
                    <button className="btn-style">
                        Sign in 
                    </button>
                </div>
                <div className="wrap-main-content">
                    <div className="main-title">
                        <div className="title">
                            Payments infrastructure for the internet
                        </div>
                        
                        <div className="detail">
                            Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                        </div>
                        <button className="btn-style">
                            Start now
                        </button>
                    </div>
                    <Phone className="image-style" />
                </div>
            </div>
            {/* <section className="divv" onClick={getXYofDiv}></section> */}
            
        </WrapMain>
    )
}

import React, {useState, useRef} from 'react'
//images
import backGround from '../assets/images/background/background.svg'
import Logo from '../assets/images/Logo'
import Phone from '../assets/images/phone'
import IconMenu from '../assets/images/iconMenu'
//styles
import {WrapMain} from './index.styles'
export default function Main() {
    const [xActive, setXActive] = useState(0)
    const [isNext, setIsNext] = useState(false)
    const btnElementRef = useRef(null)
    const [XOffset, setXOffset] = useState(`${780}px`);
    const [isHover, setIsHover] = useState(false)

    const getXYofDiv = (indexItem) => {
            setIsHover(true)
            
        setXActive(indexItem)
        if (xActive !== indexItem) {
            setIsNext(true)
        }
        if( indexItem === 1) {
            setXOffset(`${960}px`)
        }
        else
        if( indexItem === 2) {
            setXOffset(`${1140}px`)
        }
        else 
        if (indexItem === 0) {
            setXOffset(`${780}px`)
        }

    }
    return (
        <WrapMain backGround={backGround} xOffset={XOffset} isNext={isNext} >
            <div className="wrap-content">
                <div className="header-menu">
                    <Logo />
                    <div className="stripe-menu">
                        <button className="btn-menu" onMouseEnter={() => getXYofDiv(0)} onMouseLeave={() => setIsHover(false)}>Products
                        </button>
                        <button className="btn-menu" onMouseEnter={() => getXYofDiv(1)} onMouseLeave={() => setIsHover(false)}>Developers
                        </button>
                        <button className="btn-menu" onMouseEnter={() => getXYofDiv(2)} onMouseLeave={() => setIsHover(false)}>Company
                        </button>
                        {isHover === true ? 
                            <span ref={btnElementRef} className="hover-content">
                            {xActive === 0 ?
                                <>
                                Products
                                    <div className="wrap-icon">
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Payment
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Terminal
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Connect
                                        </div>
                                    </div>
                                </>
                                : 
                                <>
                                {xActive === 1 ?
                                    <>
                                    Developers
                                    <div className="wrap-icon">
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Plugin
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Library
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Help
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Billing
                                        </div>
                                    </div>
                                    </>
                                    : 
                                    <>
                                    Company
                                    <div className="wrap-icon">
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            About
                                        </div>
                                        <div className="wrap-content-icon">
                                            <IconMenu className="icon-menu"/>
                                            Customer
                                        </div>
                                    </div>
                                    </>
                            }
                                </>
                            }
                        </span>
                        :
                        ""
                        }
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
            
        </WrapMain>
    )
}
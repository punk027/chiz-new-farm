import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom'


import HomepageBG from "../assets/bg-homepage.jpg";

import Metamask from "../assets/metamask.svg";

import WConnect from "../assets/wallet-connect.svg";


import { useWallet } from 'use-wallet';

const SignIn = props => {

    const history=useHistory();
    const { account, connect } = useWallet();
   
    useEffect(() => {
        const localAccount = localStorage.getItem("account");
        const walletProvider = localStorage.getItem("walletProvider");
        if (!account && localAccount) {
        
          if (localAccount && (walletProvider === "metamask" || walletProvider === "injected")) {
            connect("injected");
            localStorage.setItem("walletProvider", "metamask");
          }
          if (localAccount && walletProvider === "walletconnect") {
            connect('walletconnect');
            localStorage.setItem("walletProvider", "walletconnect");
          }
        }
      }, [account, connect]);
    
      const onChangeWallet = (data) => {
        if (data === 'metamask') {
          connect("injected");
          localStorage.setItem("walletProvider", "metamask");
        
        } else if (data === 'walletconnect') {
          connect("walletconnect");
          localStorage.setItem("walletProvider", "walletconnect");
        
        }
      }
    
      useEffect(() => {
        if (account) {
        
          localStorage.setItem("account", account);
          history.push('/dashboard')
        }
        else {
            history.push('/')
        }
      }, [account, history]);
    
      

    return (
        <Container fluid className="main_layout ">
            <Row style={{ zIndex: '10000', opacity:1 }} >
                <Col lg={{ span: 4, offset: 4 }}  className="d-flex flex-column justify-content-center" style={{maxWidth:'480px', marginLeft: 'auto', marginRight:'auto', width:'100%', padding:'60px 0' }}>
                    <Row>
                        <Col sm={{span:0}} className="logo-image-container">
                            {/*<Image src={dogAvtar} roundedCircle style={{ marginLeft:'auto', marginRight:'auto', display:'block' }} />*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                           {/* <img alt="KawaFarm" src={logoKawafarm} className="svg-kawa" />*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className="text-center intro-text">
                            <span className="text-center">Farm <strong style={{ color: "#FF2E59", fontFamily:"Visby 800" }}>CHIZ</strong> by staking the lp tokens!</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 12 }} style={{ padding: 4 }}>

                            <div className="p-4 m-4 loginBox" style={{ background: 'white' }}>
                                <Row className="p-4 text-center">
                                    <Col lg={12}><h3 style={{letterSpacing:'-0.04em'}}>Connect your wallet to start farming</h3></Col>
                                    
                                </Row>
                                <Button
                                    variant="light"
                                    className="mx-md-3 wallet-connect-button d-flex align-items-center w-fill-available my-3 bg_harvest "
                                    //onClick={()=>history.push('/dashboard')}
                                     onClick={() => {
                                        onChangeWallet('metamask');
                                       
                                     }}
                                >
                                    <span className="text_app mb-0 text-left w-fill-available">Connect to Metamask</span>
                                    <img src={ Metamask } alt=""/>

                                </Button>
                                <Button
                                    variant="light"
                                    className="mx-3 mb-3 wallet-connect-button d-flex align-items-center w-fill-available  bg_harvest"
                                    //onClick={()=>history.push('/dashboard')}
                                     onClick={() => {
                                         onChangeWallet('walletconnect');
                                     }}
                                >
                                    <span className="text_app mb-0 text-left w-fill-available">Use Wallet Connect</span>
                                    <img src={ WConnect } alt=""/>
                                </Button>
                               
                            </div>
                            <div className="wallet-set-up-link-box mx-4">

                                    <p className="walletsetup text-center"><a href="https://metamask.io/faqs" target="_blank" rel="noreferrer">Don't have a wallet set up?</a></p>

                                </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
 
                   
              
        </Container>

    );
};

export default SignIn;

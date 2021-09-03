import React, { Component, useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import Options from "../../assets/option.svg";
import ETH from "../../assets/eth.svg";
import Doge from "../../assets/doge.svg";
import { useWallet } from 'use-wallet';
import ConectWallet from "../conectWallet";
import { formatAddress } from "../../utils";
const Header = (props) => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [userAccount, setUserAccount] = useState(null);
  const [theme, setTheme] = useState(true);
  const handleClose = () => {
    setShow(false);
  }
  const { account, connect, reset, status } = useWallet();
  const handleShow = () => {
    setShow(true);
  }
  const onChangeWallet = (data) => {
    if (data === 'metamask') {
      connect("injected");
      localStorage.setItem("walletProvider", "metamask");
      setModalShow(false);
    } else if (data === 'walletconnect') {
      connect("walletconnect");
      localStorage.setItem("walletProvider", "walletconnect");
      setModalShow(false);
    }
  }
  useEffect(() => {
    const localAccount = localStorage.getItem("account");
    const walletProvider = localStorage.getItem("walletProvider");
    if (!account && localAccount) {
      setUserAccount(localAccount);
      if (localAccount && (walletProvider === "metamask" || walletProvider === "injected")) {
        connect("injected");
        localStorage.setItem("walletProvider", "metamask");
      }
      if (localAccount && walletProvider === "walletconnect") {
        connect('walletconnect');
        localStorage.setItem("walletProvider", "walletconnect");
      }
    }
  }, []);

  const data = [
      {
        icon: ETH,
        name: "Item Name",
      },
      {
        icon: Doge,
        name: "Item Name",
      },
      {
        icon: ETH,
        name: "Item Name",
      },
      {
        icon: Doge,
        name: "Item Name",
      },
    ];
    useEffect(() => {
      if (account) {
        setUserAccount(account);
        localStorage.setItem("account", account);
      }
    }, [account]);
    const onDisconnectWallet = () => {
      reset();
      setUserAccount(null);
      localStorage.removeItem("account");
      localStorage.removeItem("walletProvider");
    }
    
   

    return (
      <>
        <Row>
          <Col lg={12} className="py-3 d-flex justify-content-between flex-column flex-lg-row">
            <div className="d-flex flex-column flex-lg-row">
              <div className="py-2 px-3 d-flex align-items-center mr-2 mb-2 header_badge">
                <h6 className="mb-0 mr-2">CIRCULATING SUPPLY: </h6>
                <h5 className="mb-0">9.557T</h5>
              </div>

              <div className="py-2 px-3 d-flex align-items-center mr-2 mb-2 header_badge">
                <h6 className="mb-0 mr-2">MARKET CAP: </h6>
                <h5 className="mb-0">$112M</h5>
              </div>

              <div className="py-2 px-3 d-flex align-items-center mr-2 mb-2 header_badge">
                <h6 className="mb-0 mr-2">MARKET PRICE: </h6>
                <h5 className="mb-0">$0.000013</h5>
              </div>
            </div>
            <div className="d-flex flex-row mb-2">
            { !userAccount ? (
              <Button
                variant="warning"
                className="orange_button mr-2"
                onClick={() => setModalShow(true)}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button>
                {formatAddress(userAccount)}
              </Button>
            )}
              <Button
                variant="outline-secondary"
                className="px-2 border_radius"
                onClick={onDisconnectWallet}
              >
                <img src={Options} alt="" />
              </Button>
              <ConectWallet
              show={modalShow}
              onHide={() => setModalShow(false)}
              onChangeWallet={onChangeWallet}
              themeClass={theme}
            />
            </div>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton className="border-0 text_app_color">
            <Modal.Title>
              <h5 className="mb-0">Connect wallet</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data.map((e) => (
              <div className="d-flex align-items-center app_light_grey_bg border_radius text_app_color px-3 py-2 mb-2">
                <img src={e.icon} alt="" height="35px" className="mr-2" />
                <h6 className="mb-0">{e.name}</h6>
              </div>
            ))}

            <Button
              variant="warning"
              className="mr-2 w-100 border_radius orange_button py-2"
              onClick={handleClose}
            >
              Confirm purchase
            </Button>
          </Modal.Body>
        </Modal>
      </>
    );
}
export default Header;
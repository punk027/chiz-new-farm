import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Lines from "../assets/line-design.svg";
import ETH from "../assets/eth.svg";
import Select from "react-select";
import Layout from "../components/Layout/index";

const options = [
  {
    value: "ETH",
    label: (
      <>
        <img src={ETH} height="30px" alt="" className="mr-2" />
        ETH
      </>
    ),
  },
  {
    value: "DAI",
    label: (
      <>
        <img src={ETH} height="30px" alt="" className="mr-2" />
        DAI
      </>
    ),
  },
  {
    value: "USDC",
    label: (
      <>
        <img src={ETH} height="30px" alt="" className="mr-2" />
        USDC
      </>
    ),
  },
  {
    value: "WBTC",
    label: (
      <>
        <img src={ETH} height="30px" alt="" className="mr-2" />
        WBTC
      </>
    ),
  },
];

function Mine() {
  const [show, setShow] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDonateClose = () => setShowDonate(false);
  const handleDonateShow = () => setShowDonate(true);

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  return (
    <Layout title="Mine" className="bg-danger">
      <Row className="h-auto justify-content-center">
        <Col lg={12}>
          <h3 className="text_app_color">Donation Mining</h3>
          <img src={Lines} alt="" />
        </Col>
        <Col lg={6} className="pt-3 pt-lg-5">
          <div className="app_color_bg border_radius main_card">
            <h5 className="text-white mb-3">Donation Day 37</h5>
            <div className="d-flex">
              <div className="bg-white w-100 mr-2 mb-2 p-2 rounded">
                <span className="small_font">Remaining time:</span>
                <h6 className="text_app_color">
                  <b>1:20:45</b>
                </h6>
              </div>
              <div className="bg-white w-100 mb-2 p-2 rounded">
                <span className="small_font">daily dd emission</span>
                <h6 className="text_app_color">
                  <b>500M</b>
                </h6>
              </div>
            </div>

            <div className="d-flex mb-2">
              <div className="bg-white w-100 mr-2 mb-2 p-2 rounded">
                <span className="small_font">total value donated today</span>
                <h6 className="text_app_color">
                  <b>$3087</b>
                </h6>
              </div>
              <div className="bg-white w-100 mb-2 p-2 rounded">
                <span className="small_font">implied value today</span>
                <h6 className="text_app_color">
                  <b>$0.00001</b>
                </h6>
              </div>
            </div>

            <div className="d-flex">
              <Button
                variant="warning"
                className="mr-2 w-100 border_radius orange_button py-2"
                onClick={handleDonateShow}
              >
                Donate
              </Button>
              <Button
                variant="info"
                className="w-100 border_radius light_button py-2"
                onClick={handleShow}
              >
                Claim
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0 text_app_color">
          <Modal.Title>
            <h5 className="mb-0">Claim DD token</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="app_light_bg text_app_color rounded d-flex justify-content-between py-3 px-3">
            <h6>wallet account has share in DD token</h6>
            <Form.Check aria-label="option" />
          </div>
          <h6 className="text_app_color py-3">
            Balance: <b>546</b>
          </h6>
          <Button
            variant="warning"
            className="mr-2 w-100 border_radius orange_button py-2"
            onClick={handleClose}
          >
            Confirm purchase
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={showDonate} onHide={handleDonateClose} centered>
        <Modal.Header closeButton className="border-0 text_app_color">
          <Modal.Title>
            <h5 className="mb-0">Donate tokens</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h6 className="text_app_color">Pool</h6>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
              className="border_radius"
            />
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="text_app_color">Amount</h6>
              <h6 className="text-muted">Balance: 648</h6>
            </div>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Amount"
              className="text_app_color border_radius"
            />
          </div>

          <Button
            variant="warning"
            className="mr-2 w-100 border_radius orange_button py-2"
            onClick={handleDonateClose}
          >
            Confirm purchase
          </Button>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}

export default Mine;

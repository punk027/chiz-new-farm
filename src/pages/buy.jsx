import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Lines from "../assets/line-design.svg";
import Select from "react-select";
import ETH from "../assets/eth.svg";
import Doge from "../assets/doge.svg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
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
];

const options1 = [
  {
    value: "DD",
    label: (
      <>
        <img src={Doge} height="30px" alt="" className="mr-2" />
        DD
      </>
    ),
  },
  {
    value: "DAI",
    label: (
      <>
        <img src={Doge} height="30px" alt="" className="mr-2" />
        DAI
      </>
    ),
  },
];

function Buy() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e);
  };

  return (
    <Layout title="Mine" className="bg-danger">
      <Row className="h-auto justify-content-center">
        <Col lg={12}>
          <h3 className="text_app_color">Buy</h3>
          <img src={Lines} alt="" />
        </Col>
        <Col lg={6} className="pt-3 pt-lg-5">
          <div className="app_color_bg border_radius main_card">
            <h5 className="text-white mb-3">Swap</h5>
            <div className="bg-white w-100 mb-2 px-2 py-3 d-flex justify-content-between align-items-center border_radius">
              <Select
                value={selectedOption}
                onChange={handleOptionChange}
                options={options}
                className="border_radius w-25"
              />
              <h5 className="text_app_color mb-0">
                <b>0.0</b>
              </h5>
            </div>
            <div className="convert_arrow">
              <img src={Arrow} alt="" className="bg-white p-1 rounded-circle" />
            </div>
            <div className="bg-white w-100 mb-2 px-2 py-3 d-flex justify-content-between align-items-center border_radius">
              <Select
                value={selectedOption1}
                onChange={handleOptionChange1}
                options={options1}
                className="border_radius w-25"
              />
              <h5 className="text_app_color mb-0">
                <b>0.0</b>
              </h5>
            </div>
            <Link to="/purchase" style={{ textDecoration: "none" }}>
              <div className="d-flex">
                <Button
                  variant="warning"
                  className="w-100 border_radius orange_button py-2"
                >
                  Buy
                </Button>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Buy;

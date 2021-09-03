import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import Lines from "../assets/line-design.svg";
import ETH from "../assets/eth.svg";
import Layout from "../components/Layout/index";
import { Link } from "react-router-dom";

function Purchase() {
  return (
    <Layout title="Purchase DD token on uniswap" className="bg-danger">
      <Row className="h-auto justify-content-center">
        <Col lg={12}>
          <h3 className="text_app_color">Purchase DD token on uniswap</h3>
          <img src={Lines} alt="" />
        </Col>
        <Col lg={6} className="pt-3 pt-lg-5">
          <div className="app_color_bg border_radius main_card">
            <h5 className="text-white mb-3">Purchase DD token</h5>
            <div className="app_light_bg w-100 mb-2 px-2 py-3 border_radius">
              <h6 className="mb-0">
                <img src={ETH} alt="" height="40px" className="mr-2" />
                Connect to Uniswap
              </h6>
            </div>

            <div className="mb-3">
              <h6 className="text-white">Amount</h6>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Amount"
                className="text_app_color border_radius"
              />
            </div>

            <Link to="/buy" style={{ textDecoration: "none" }}>
              <div className="d-flex">
                <Button
                  variant="warning"
                  className="w-100 border_radius orange_button py-2"
                >
                  Confirm purchase
                </Button>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default Purchase;

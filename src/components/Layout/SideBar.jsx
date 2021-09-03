import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import Dashboard from "../../assets/dashboard.svg";
import Buy from "../../assets/buy.svg";
import Stack from "../../assets/stack.svg";
import Mine from "../../assets/mine.svg";
import Rewards from "../../assets/rewards.svg";
import User from "../../assets/user.svg";
import Setting from "../../assets/setting.svg";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
    };
  }

  componentDidMount() {
    this.setState({
      path: this.props.location.pathname,
    });
  }

  selectedRoute = (e) => {
    console.log(e);
  };
  render() {
    const { path } = this.state;
    return (
      <>
        <Navbar expand="lg" className="d-lg-none d-flex justify-content-between sidebar_bg">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#dashboard">
                <div className="d-flex align-items-center py-3 px-4">
                  <img src={Dashboard} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Dashboard</h6>
                </div>
              </Nav.Link>

              <Nav.Link href="/buy">
                <div
                  className={`d-flex align-items-center py-3 px-4 ${
                    path === "/buy" ? "bg-white" : null
                  } ${path === "/purchase" ? "bg-white" : null}`}
                >
                  <img src={Buy} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Buy</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <div className="d-flex align-items-center py-3 px-4">
                  <img src={Stack} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Stake</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="/mine">
                <div
                  className={`d-flex align-items-center py-3 px-4 ${
                    path === "/mine" ? "bg-white" : null
                  } ${path === "/" ? "bg-white" : null}`}
                >
                  <img src={Mine} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Mine</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <div className="d-flex align-items-center py-3 px-4">
                  <img src={Rewards} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Rewards</h6>
                </div>
              </Nav.Link>

              <Nav.Link href="#">
                <div className="d-flex align-items-center py-3 px-4">
                  <img src={User} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Profile</h6>
                </div>
              </Nav.Link>
              <Nav.Link href="#">
                <div className="d-flex align-items-center py-3 px-4">
                  <img src={Setting} alt="" className="mr-2" height="18px" />
                  <h6 className="mb-0 text_app_color"> Setting</h6>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="sidebar_class h-100 d-none d-lg-flex align-items-start flex-column">
          <div className="mb-auto w-100">
            <img src={Logo} alt="" />
            <div className="d-flex align-items-center py-3 px-4">
              <img src={Dashboard} alt="" className="mr-2" height="18px" />
              <h6 className="mb-0 text_app_color"> Dashboard</h6>
            </div>

            <Link to="/buy">
              <div
                className={`d-flex align-items-center py-3 px-4 ${
                  path === "/buy" ? "bg-white" : null
                } ${path === "/purchase" ? "bg-white" : null}`}
              >
                <img src={Buy} alt="" className="mr-2" height="18px" />
                <h6 className="mb-0 text_app_color"> Buy</h6>
              </div>
            </Link>
            <div className="d-flex align-items-center py-3 px-4">
              <img src={Stack} alt="" className="mr-2" height="18px" />
              <h6 className="mb-0 text_app_color"> Stake</h6>
            </div>
            <Link to="/mine">
              <div
                className={`d-flex align-items-center py-3 px-4 ${
                  path === "/mine" ? "bg-white" : null
                } ${path === "/" ? "bg-white" : null}`}
              >
                <img src={Mine} alt="" className="mr-2" height="18px" />
                <h6 className="mb-0 text_app_color"> Mine</h6>
              </div>
            </Link>

            <div className="d-flex align-items-center py-3 px-4">
              <img src={Rewards} alt="" className="mr-2" height="18px" />
              <h6 className="mb-0 text_app_color"> Rewards</h6>
            </div>
          </div>
          <div className="pb-4">
            <div className="d-flex align-items-center py-3 px-4">
              <img src={User} alt="" className="mr-2" height="18px" />
              <h6 className="mb-0 text_app_color"> Profile</h6>
            </div>

            <div className="d-flex align-items-center py-3 px-4">
              <img src={Setting} alt="" className="mr-2" height="18px" />
              <h6 className="mb-0 text_app_color"> Setting</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SideBar);

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import SideBar from "./SideBar";
import Helmet from "react-helmet";

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 991.98 });
  }

  render() {
    const { isDesktop } = this.state;
    return (
      <>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Container fluid>
          <Row>
            {/* <Col lg={2} className="sidebar_bg sidebar_class px-0"> */}
            <Col lg={2} className="sidebar_bg px-0">
              <SideBar isDesktop={isDesktop} />
            </Col>
            <Col
              lg={{ span: 10, offset: 2 }}
              className="bg-white px-3 h-100"
              style={{ minHeight: "100vh" }}
            >
              <Header isDesktop={isDesktop} />
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

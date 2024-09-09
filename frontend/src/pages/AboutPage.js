import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import NavbarComponent from "../pages/navbar"; // Adjust the path based on your file structure

const AboutPage = () => {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent />

      {/* About Section */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col sm={3}>
            <Image src="/img/400x500/05.jpg" fluid />
          </Col>
          <Col sm={3}>
            <Image src="/img/400x550/01.jpg" fluid />
          </Col>
          <Col sm={1}></Col>
          <Col sm={5}>
            <p className="text-uppercase font-weight-bold text-primary">
              Culture
            </p>
            <h2>About Event</h2>
            <p>
              We aim high at being focused on building relationships with our
              clients and community. Using our creative gifts drives this
              foundation.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col sm={{ span: 3, order: 2 }}>
            <Image src="/img/400x550/02.jpg" fluid />
          </Col>
          <Col sm={{ span: 3, order: 3 }}>
            <Image src="/img/400x500/06.jpg" fluid />
          </Col>
          <Col sm={1}></Col>
          <Col sm={{ span: 5, order: 1 }} className="text-sm-right">
            <p className="text-uppercase font-weight-bold text-primary">
              Speakers
            </p>
            <h2>Keynote Speakers</h2>
            <p>
              Working together on the daily requires each individual to let the
              greater good of the team’s work surface above their own ego.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Process Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase font-weight-bold">Process</p>
            <h2>How it Works</h2>
          </div>
          <Row>
            <Col sm={3} className="text-center">
              <div className="process-step">
                <div className="step-number bg-white text-primary mx-auto mb-3">
                  01
                </div>
                <h3>Consult</h3>
                <p>
                  This is where we sit down, grab a cup of coffee and dial in
                  the details.
                </p>
              </div>
            </Col>
            <Col sm={3} className="text-center">
              <div className="process-step">
                <div className="step-number bg-white text-primary mx-auto mb-3">
                  02
                </div>
                <h3>Create</h3>
                <p>The time has come to bring those ideas and plans to life.</p>
              </div>
            </Col>
            <Col sm={3} className="text-center">
              <div className="process-step">
                <div className="step-number bg-white text-primary mx-auto mb-3">
                  03
                </div>
                <h3>Develop</h3>
                <p>
                  Whether through commerce or just an experience to tell your
                  brand.
                </p>
              </div>
            </Col>
            <Col sm={3} className="text-center">
              <div className="process-step">
                <div className="step-number bg-white text-primary mx-auto mb-3">
                  04
                </div>
                <h3>Release</h3>
                <p>Now that your brand is all dressed up and ready to party.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* News Section */}
      <div className="bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="text-uppercase font-weight-bold text-primary">Blog</p>
            <h2>Latest News</h2>
          </div>
          <Row>
            <Col sm={4}>
              <div className="news-item">
                <Image src="/img/970x970/01.jpg" fluid />
                <div className="bg-white p-4 text-center">
                  <p className="text-uppercase font-weight-bold text-primary">
                    News
                  </p>
                  <h3>Create Something Great</h3>
                  <p>
                    The time has come to bring those ideas and plans to life.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="news-item">
                <Image src="/img/970x970/02.jpg" fluid />
                <div className="bg-white p-4 text-center">
                  <p className="text-uppercase font-weight-bold text-primary">
                    News
                  </p>
                  <h3>Jacks of All. Experts in All.</h3>
                  <p>
                    The time has come to bring those ideas and plans to life.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="news-item">
                <Image src="/img/970x970/03.jpg" fluid />
                <div className="bg-white p-4 text-center">
                  <p className="text-uppercase font-weight-bold text-primary">
                    News
                  </p>
                  <h3>Finding your Perfect Place</h3>
                  <p>
                    The time has come to bring those ideas and plans to life.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Subscribe Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <p className="text-uppercase font-weight-bold text-white-50">
            Subscribe
          </p>
          <h2>Join Over 1000+ People</h2>
          <Form className="d-flex justify-content-center mt-4">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="rounded-left"
            />
            <Button variant="outline-light" className="rounded-right">
              <i className="ti-arrow-right"></i>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;

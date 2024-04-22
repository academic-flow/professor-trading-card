import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PersonCircle, GiftFill } from 'react-bootstrap-icons';
import { motion, useAnimation } from "framer-motion"; // Import useAnimation hook
import styles from '../../../public/stylesheets/MainPage.css';

// Reusable Section component
const Section = ({ title, children }) => {
  const sectionControls = useAnimation(); // Initialize animation controls

  // Ref for the section element
  const sectionRef = useRef(null);

  // Intersection observer to track visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            sectionControls.start("visible"); // Start animation when in view
          }
        },
        { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    // Cleanup function
    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, [sectionControls]);

  return (
      <motion.section
          className="text-center"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={sectionControls} // Use animation controls
          variants={{
            visible: { opacity: 1, y: 0 }, // Define visible variant
          }}
          transition={{ duration: 0.5 }}
          ref={sectionRef}
      >
        <h2 style={{ color: '#333', fontSize: '28px', fontWeight: 'bold', margin: '20px 0' }}>{title}</h2>
        <Container>
          <Row md={1} lg={2}>
            {children}
          </Row>
        </Container>
      </motion.section>
  );
};

function MainPage() {
  return (
      <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
        <Container fluid>
          <Row>
            <Col></Col>
            <Col sm={6} className="text-center">
              <motion.h1
                  style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', marginTop: '10%' }}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                Welcome to ProfTCG
              </motion.h1>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <motion.PersonCircle
                  size={64}
                  style={{ marginBottom: '5%' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
              />
            </Col>
          </Row>
          <hr className="line" />
        </Container>

        <Container className="bg-image" fluid>
          <Container className="justify-content-center text-center">
            <motion.h2
                style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '10%' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              Available Packages To Open:
            </motion.h2>
            <motion.p
                style={{ color: '#666', fontSize: '18px', marginBottom: '10%' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              Click here to open your package:
            </motion.p>
            <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: '#333', borderColor: '#333' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
              <GiftFill size={64} />
            </Button>
          </Container>

          {/* Reusable Section component for Trade Requested */}
          <Section title="Trade requested from 'UserName'">
            <Col xs={6}></Col>
            <Col xs={6}></Col>
          </Section>

          <div style={{ height: '200vh' }}>
            {/* Additional content to stagger animations */}
            <Container>
              <Row>
                <Col xs={6} className="section">
                  <Section title="Card Offered:">
                    <Col xs={6}></Col>
                    <Col xs={6}></Col>
                  </Section>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col xs={6} className="section">
                  <Section title="Card Wanted:">
                    <Col xs={6}></Col>
                    <Col xs={6}></Col>
                  </Section>
                </Col>
              </Row>
            </Container>

            <div className="text-center">
              <motion.p
                  style={{ color: '#666', fontSize: '18px', marginBottom: '10%' }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
              >
                Accept Trade?
              </motion.p>
              <Button
                  style={{ marginRight: '5%', backgroundColor: '#00ab66', borderColor: '#00ab66' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                Yes
              </Button>
              <Button
                  style={{ backgroundColor: '#e13d30', borderColor: '#e13d30' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                No
              </Button>
            </div>
          </div>
        </Container>
      </main>
  );
}

export default MainPage;

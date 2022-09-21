import React from "react";
import { Form, Container, Card, Alert } from "react-bootstrap";
import Buttons from "./Buttons";
import { useGlobalContext } from "./context";

function App() {
  const { value, alert } = useGlobalContext();

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <Card className="p-4">
          {alert && (
            <Alert variant="danger" className="text-center">
              {alert}
            </Alert>
          )}
          <Form>
            <Form.Group className="mb-3 ">
              <Form.Control
                type="text"
                value={value}
                placeholder="0"
                className="p-3"
                disabled='cursor'
                style={{ fontSize: "1.5rem" }}
              />
            </Form.Group>
            {/* buttons component */}
            <Buttons />
          </Form>
        </Card>
      </div>
    </Container>
  );
}

export default App;

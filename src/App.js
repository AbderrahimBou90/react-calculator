import React from "react";
import { Form, Container, Card, Alert } from "react-bootstrap";
import Screen from "./Screen";
import Buttons from "./Buttons";
import { useGlobalContext } from "./context";

function App() {
  const { alert } = useGlobalContext();

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
            {/* screen component */}
            <Screen/>
            {/* buttons component */}
            <Buttons />
          </Form>
        </Card>
      </div>
    </Container>
  );
}

export default App;

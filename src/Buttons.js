import React  from "react";
import {  Button, Row, Col} from "react-bootstrap";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const {handleClick,data} = useGlobalContext()

  return (
    <>
      {data.map((item) => {
        const { numbers,id } = item;
        return (
          <Row key={id} className="mt-2">
            {numbers.map((item,) => {
              const { digit, value, color,id } = item;
              return (
                <Col ms="true" key={id}>
                  <Button
                    variant={color}
                    value={value}
                    className="w-100 p-2"
                    onClick={handleClick}
                  >
                    {digit}
                  </Button>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  );
};

export default Buttons;



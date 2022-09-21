import React from 'react'
import { Form } from "react-bootstrap";
import { useGlobalContext } from './context';

const Screen = () => {
 const {value} = useGlobalContext()
  return (
    <Form.Group className="mb-3 ">
      <Form.Control
        type="text"
        value={value}
        placeholder="0"
        className="p-3"
        disabled="cursor"
        style={{ fontSize: "1.5rem" }}
      />
    </Form.Group>
  );
}

export default Screen
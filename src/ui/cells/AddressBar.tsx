import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { Input, Button } from "ui/atoms";

const Form = styled.form`
  display: flex;
`;

type Location = ReturnType<typeof useLocation>;

const locationToUrl = ({ pathname, search, hash }: Location) =>
  pathname + search + hash;

export function AddressBar() {
  const location = useLocation();
  const history = useHistory();
  const [url, setUrl] = useState(locationToUrl(location));
  useEffect(() => {
    setUrl(locationToUrl(location));
  }, [location]);
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        history.push(url);
      }}
    >
      <Button type="button" onClick={() => history.goBack()}>
        Back
      </Button>
      <Input required value={url} onChange={e => setUrl(e.target.value)} />
      <Button type="button" onClick={() => history.goForward()}>
        Forward
      </Button>
    </Form>
  );
}

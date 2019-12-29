import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Input, Button } from "ui/common";

const Form = styled.form`
  display: flex;
`;

export class BaseAddressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.location.pathname
    };
  }

  componentDidUpdate(_prevProps, { url: prevUrl }) {
    const { location } = this.props;
    const { url } = this.state;
    if (location.pathname !== url && prevUrl === url) {
      this.setUrl(location.pathname);
    }
  }

  setUrl = url => this.setState({ url });

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(this.state.url);
  };

  render() {
    const { url } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Button type="button" onClick={() => this.props.history.goBack()}>
          Back
        </Button>
        <Input
          required
          value={url}
          onChange={e => this.setUrl(e.target.value)}
        />
        <Button type="button" onClick={() => this.props.history.goForward()}>
          Forward
        </Button>
      </Form>
    );
  }
}

export const AddressBar = withRouter(BaseAddressBar);

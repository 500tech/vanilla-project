import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MainSection } from "ui/layout";

export class PageNotFound extends Component {
  state = {
    ttr: 3
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        ttr: this.state.ttr - 1
      });
    }, 1000);
  }

  // componentDidUpdate() {
  //   if (this.state.ttr === 0) {
  //     this.props.history.replace("/");
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { location } = this.props;
    if (this.state.ttr === 0) {
      return <Redirect to="/" />;
    }
    return (
      <MainSection heading={`Page ${location.pathname} not found :(`}>
        <h3>Redirecting to home page in {this.state.ttr}...</h3>
      </MainSection>
    );
  }
}

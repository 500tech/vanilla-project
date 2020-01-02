import React, { Component, useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { MainSection } from "ui/mols";

export function PageNotFound() {
  const [ttr, setTtr] = useState(3);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTtr(ttr - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ttr]);
  if (ttr === 0) {
    return <Redirect to="/" />;
  }
  return (
    <MainSection heading={`Page ${location.pathname} not found :(`}>
      <h3>Redirecting to home page in {ttr}...</h3>
    </MainSection>
  );
}

export class PageNotFoundLegacy extends Component {
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

export default PageNotFound;

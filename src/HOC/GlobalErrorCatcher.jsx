import React from "react";
import MainLayout from "../Layouts/MainLayout/MainLayout";

class GlobalErrorCatcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: error});
  }

  render() {
    if (this.state.error) {
      return (
          <MainLayout>{this.state.error}</MainLayout>
        )
    }

    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}
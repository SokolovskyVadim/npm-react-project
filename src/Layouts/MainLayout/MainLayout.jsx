import React from "react";
import TaskList from "Scenes/TaskList/TaskList";

class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modalContent:0};
  }

  componentDidCatch(error, errorInfo) {
    console.log('got error', error, errorInfo);
  }

  showModal = (content) => {
    this.setState({modalContent: content})
  }

  render() {
    return (
        <div className={'layout'}>
          {!!this.state.modalContent &&
          <div className={"modal"}>
            {this.state.modalContent}
          </div>
          }

          <div className={'header'}>
            Header
          </div>
          <div className={'content'}>
          <TaskList showModal={this.showModal}/>
          </div>
          <div className={'footer'}>
            Footer
          </div>
        </div>
      )
  }
}

export default MainLayout
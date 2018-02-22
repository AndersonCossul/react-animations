import React, { Component } from "react"
import Transition from 'react-transition-group/Transition'
import "./App.css"
import Modal from "./components/Modal/Modal"
import Backdrop from "./components/Backdrop/Backdrop"
import List from "./components/List/List"

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit>
          {state => (
              <div
                style={{
                  backgroundColor: 'red',
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                  marginBottom: '20px',
                  transition: 'opacity 0.3s ease-out',
                  opacity: state === 'exiting' ? 0 : 1
              }}>
          </div>
          )}
        </Transition>
        <Transition
          in={this.state.isModalOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit>
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition>
        {this.state.isModalOpen ? <Backdrop show={this.state.isModalOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App

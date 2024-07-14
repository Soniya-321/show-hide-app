// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  addFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  addLastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="card">
            <button
              type="button"
              className="button"
              onClick={this.addFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName ? <p className="name">Joe</p> : null}
          </div>
          <div className="card">
            <button type="button" className="button" onClick={this.addLastName}>
              Show/Hide Lastname
            </button>
            {lastName ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

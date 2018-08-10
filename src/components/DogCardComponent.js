import React, { Component } from 'react';

class DogCard extends Component {
  render() {
    const { dog_name, first_name, request_date, request_time, address_one, address_two, zip } = this.props.request
    return (
      <div className="column is-one-quarter">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="dog_image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Dog: {dog_name}</p>
                <p className="subtitle is-6">Owner: {first_name}</p>
              </div>
            </div>
            <div className="media">

            <div className="content">
              <p className="subtitle is-6">Date:</p>
              <p dateTime="2016-1-1">{request_date}</p>
            </div>
          </div>

            <div className="content">
              <p className="subtitle is-6">Time:</p>
              <p dateTime="2016-1-1">{request_time}</p>
            </div>

            <div className="content">
              <p className="subtitle is-6">Pickup at:</p>
              <p className="subtitle is-6">{address_one + ", " + address_two + ", " + zip}</p>
            </div>
          </div>
            <footer className="card-footer">
            <a href="#" className="card-footer-item">Accept</a>
            <a href="#" className="card-footer-item">Decline</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default DogCard;

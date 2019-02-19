import React from 'react'

class Question extends React.Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <figure className="media-left">
            <p>
              <div className="icon is-small has-text-info">
                <i className="fas fa-arrow-up" />
              </div>
            </p>
            <p>
              <div className="icon is-small has-text-info">
                <i className="fas fa-arrow-down" />
              </div>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <nav className="level is-mobile">
                <div className="level-left">
                  <p>
                    {this.props.message}
                    <br />
                    <small>
                      <a className="has-text-info">3 answers</a> · <a className="has-text-info">1 followup</a>
                    </small>
                  </p>
                </div>
              </nav>
            </div>
          </div>
          <div className="media-right">
            <button className="delete" />
          </div>
        </article>
      </div>
    )
  }
}
export default Question

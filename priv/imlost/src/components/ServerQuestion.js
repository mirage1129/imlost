import React from 'react'

class ServerQuestion extends React.Component {
  render() {
    return (
      <div className="box" style={{ marginBottom: '10px' }}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>{this.props.message}</p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
export default ServerQuestion

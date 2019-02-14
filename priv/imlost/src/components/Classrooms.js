import React from 'react'

class Classrooms extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'wyoming',
      classroom: '',
    }
  }
  componentWillMount() {
    //add API request
  }
  render() {
    //create an input for search
    return (
      <div>
        <div className="columns is-vcentered">
          <div className="column is-4 is-offset-2">
            <figure className="image">
              <div className="lostbutton green" />
            </figure>
          </div>
          <div className="column">
            <div className="box">
              <h1 className="is-size-3">Questions</h1>
              <br />

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
                            This is a question that someone is asking.
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
                            This is a question that someone is asking.
                            <br />
                            <small>
                              <a className="has-text-info">1 answer</a> · <a className="has-text-info">3 followups</a>
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
                            This is a question that someone is asking.
                            <br />
                            <small>
                              <a className="has-text-info">0 answers</a> · <a className="has-text-info">0 followups</a>
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
              <form method="POST" action={'/' + this.props.classname}>
                <div className="control">
                  <textarea className="textarea" name="question" type="text" placeholder="type in your question" />
                </div>
                <br />
                <p className="control">
                  <input className="button is-info" value="post question" type="submit" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Classrooms

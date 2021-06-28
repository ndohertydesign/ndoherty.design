import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="p-1 pt-3 mt-3 small-mb-mobile">
          <h3 className="sub-header-font">Who am I?</h3>
          {this.props.introCopy.whoAmIText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
        </div>
        <hr className="divider" />
        <div className="p-1 small-mb-mobile">
          <h3 className="sub-header-font">What do I do?</h3>
            {this.props.introCopy.whatIDoText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
        </div>
        <hr className="divider" />
        <div className="p-1">
          <h3 className="sub-header-font">How can I help you?</h3>
          {this.props.introCopy.howCanIHelpText.split("\\n").map((text) => <p className="paragraph-font mb-2">{text}</p>)}
          <div id="process-scroll-button" className="py-1">
            <span className="custom-primary-btn">More about my freelancing!</span>
          </div>
        </div>
      </div>
    )
  }
}

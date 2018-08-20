import React, {Component} from 'react'




class Signup extends Component {
  render() {
    return (
      <div className="header">

        <p className="footer-txt">vegogo – the new guide to vegan eating
        <br /> curated for you with &lt;3. Coming soon.<br />
        Sign up to be the first to know when.
        </p>




        <div id="mc_embed_signup">

          <form action="https://vegogo.us18.list-manage.com/subscribe/post?u=ba9f0358f5c621215aca582dc&amp;id=fab6881f8a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="noValidate">
            <div id="mc_embed_signup_scroll">

              <div className="mc-field-group">
                <input type="email" className="signup-field" placeholder="enter your email" name="EMAIL" id="mce-EMAIL"/>
              </div>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" xstyle="display:none"></div>
                <div className="response" id="mce-success-response" xstyle="display:none"></div>
              </div>

              <div xstyle="position: absolute; left: -5000px;" aria-hidden="true"></div>

              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="signup-button"/>
              </div>

            </div>
          </form>
        </div>

  </div>)
  }
}

export default Signup

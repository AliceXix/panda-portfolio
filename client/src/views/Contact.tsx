import React from 'react';

export default function Contact() {

    return (
      <>
        <div className="contact" id='contact'>
          <form className="centred-div">
            <div>
              <div>
                <input type="text" id="name" name="name" value="Your Name" />
                <input type="text" id="email" name="email" value="Your Email" />
              </div>
              <div>
                <input type="submit" value="SUBMIT" />
              </div>
            </div>
            <div>
              <textarea
                id="questions"
                name="questions"
                value={`SHARE YOUR THOUGHTS.
                
Don’t hesitate to mention any special attention you might require. Ask all the questions you have.`}
                rows={18}
                cols={56}
              ></textarea>
            </div>
          </form>
          <footer>
            <div>
              <h4>
                <u>Artists we support</u>
              </h4>
            </div>
          </footer>
        </div>
      </>
    );
}
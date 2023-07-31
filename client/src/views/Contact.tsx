import React from 'react';

export default function Contact() {

    return (
      <>
        <div className="contact">
          <form className="centred-div">
            <div>
              <input type="text" id="name" name="name" value="Your Name" />
              <input type="text" id="email" name="email" value="Your Email" />
              <input type="submit" value="Submit" />
            </div>
            <div>
              <textarea
                id="questions"
                name="questions"
                value={"Share your thoughts"}
                rows={20}
                cols={60}
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
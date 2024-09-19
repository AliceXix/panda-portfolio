import { Modal } from 'antd';
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        question: '',
        image: '',
    });

    const handleChange = (e :any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        //setFormData(e.target.value)
    };

    const handleImageChange = (e : any) => {
        setFormData({
            ...formData,
            image: e.target.files,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('mail', formData.mail);
        form.append('question', formData.question);

        for (let i = 0; i < formData.image.length; i++) {
        form.append("image", formData.image[i]);
        }

        fetch('http://localhost:3000/send-mail', {
            method: 'POST',
            body: form
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
    };

    const info = () => {
        Modal.success({
            title: 'Success!',
            content: (
                        <div>
                            <h3>
                                Your mail has successfully been send to your favorite tattoo artist!
                            </h3>
                            <p>
                                Please give them up to 3 business days to reply to you.
                            </p>
                        </div>
            ),
            onOk() {},
        });
    };


    return (
      <>
        <div className="contact" id="contact">
          <form className="centred-div" onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  id="email"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  placeholder="Your Mail"
                />
                <label>Attach an image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <input type="submit" value="SUBMIT" onClick={info} />
              </div>
            </div>
            <div>
              <textarea
                id="questions"
                name="question"
                value={formData.question}
                onChange={handleChange}
                rows={18}
                cols={56}
                placeholder={`SHARE YOUR THOUGHTS.
                
Don’t hesitate to mention any special attention you might require. Ask all the questions you have.`}
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
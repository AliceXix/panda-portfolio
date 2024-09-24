import { Modal } from 'antd';
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        question: '',
        image: [] as File[],
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
        const selectedFiles = Array.from(e.target.files) as File[];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: [...prevFormData.image, ...selectedFiles],
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('mail', formData.mail);
        form.append('question', formData.question);

        // for (let i = 0; i < formData.image.length; i++) {
        // form.append("image", formData.image[i]);
        // }

        formData.image.forEach((file) => {
            form.append('image', file);
        });

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
                <label>Attach images:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  multiple
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />

                <button
                  type="button"
                  onClick={() => document.getElementById("image")?.click()} // Trigger file input click
                  style={{
                    padding: "0.5em",
                    border: "2px solid white",
                    background: "black",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Select Files
                </button>

                <div className='wrapper_file_names'>
                  {formData.image.length > 0 && (
                    <ul className='file_names'>
                      {formData.image.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
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
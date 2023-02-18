import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./main.scss";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { name, email, description } = formData;

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "ehabmodiab@gmail.com",
      Password: "E151645FD1779EE9892EC3F56CB6DDD163A3",
      To: `ehabmodiab@gmail.com`,
      From: `ehabmodiab@gmail.com`,
      ReplyTo: `${email}`,
      Subject: "From the portfolio",
      Body: `Name: ${name} <br/> Email: ${email} <br/><br/> Description: ${description}`,
    }).then((message) => console.log(message));

    nameRef.current.value =
      emailRef.current.value =
      descriptionRef.current.value =
        "";
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        text="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        {/*  */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(250px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={submitForm}>
              <div className="name">
                <input
                  ref={nameRef}
                  onChange={handleChange}
                  required
                  id="name"
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="email">
                <input
                  required
                  ref={emailRef}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="description">
                <textarea
                  required
                  ref={descriptionRef}
                  onChange={handleChange}
                  id="description"
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
              <div className="button-submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;

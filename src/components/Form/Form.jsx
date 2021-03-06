import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-div">
        <div className="div-f">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xoqkrwyl"
            method="POST"
            className={`${this.props.dark && "dark-form"}`}
          >
            <h2>CONTACT ME</h2>
            <span>
              <input type="email" name="email" placeholder="abc@xyz.com" />
            </span>
            <span>
              <textarea
                name="message"
                id="textarea"
                cols="21"
                rows="10"
                placeholder="Your Message Goes here..."
              ></textarea>
            </span>

            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

import { object, string, ref } from "yup";
import axiosInstance from "./utils/axiosInstance";

class FormHandler {
  errors = {};
  touched = {};
  fields = {};

  constructor(inputElements, schema) {
    this.inputElements = inputElements;
    this.schema = schema;

    this.validateField = this.validateField.bind(this);
    this.focusField = this.focusField.bind(this);
    this.changeField = this.changeField.bind(this);
    this.submit = this.submit.bind(this);

    for (let i = 0; i < this.inputElements.length; i++) {
      this.inputElements[i].addEventListener("blur", this.validateField);
      this.inputElements[i].addEventListener("focus", this.focusField);
      this.inputElements[i].addEventListener("input", this.changeField);
    }
  }

  clearForm = () => {
    for (let i = 0; i < this.inputElements.length; i++) {
      const element = this.inputElements[i];
      element.value = "";
    }
  };

  changeField = (event) => {
    const { value, name } = event.target;
    this.fields[name] = value;
    this.validateField(event);
  };

  focusField = (event) => {
    this.touched[event.target.name] = true;
  };

  async validateField(event) {
    const { value, name } = event.target;
    try {
      this.schema.validateSyncAt(name, this.fields);
      this.errors[name] = "";
    } catch (error) {
      this.errors[name] = error.message;
    } finally {
      this.displayErrorMessage();
    }
  }

  displayErrorMessage = () => {
    for (const key in this.errors) {
      const element = document.getElementById(key);
      const lastChild = element.parentElement.lastElementChild.nodeName;
      if (this.errors[key]) {
        if (lastChild !== "SPAN") {
          const errorSpan = document.createElement("span");
          errorSpan.innerHTML = this.errors[key];
          errorSpan.className = "form-field__error";
          element.parentElement.appendChild(errorSpan);
        }
      } else {
        if (lastChild === "SPAN") {
          element.parentElement.removeChild(element.parentElement.lastChild);
        }
      }
    }
  };

  validate() {
    try {
      this.schema.validateSync(this.fields, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = error.inner.reduce((p, c) => {
        const key = c.path;
        if (!p[key]) {
          p[key] = [];
        }
        p[key].push(c.errors[0]);
        return p;
      }, {});
      this.errors = errors;
    } finally {
      this.displayErrorMessage();
    }
  }

  hasError = () => {
    let hasError = false;
    for (const key in this.errors) {
      if (this.errors[key]) {
        hasError = true;
        break;
      }
    }
    return hasError;
  };

  submit(event) {
    event.preventDefault();
    this.validate();
    if (this.hasError()) return;
  }
}

class Register extends FormHandler {
  constructor() {
    const inputElements = document.getElementsByClassName("form-field__input");
    const registerSchema = object().shape({
      firstName: string().required("First Name is required..."),
      lastName: string(),
      email: string()
        .email("Please enter valid email address")
        .required("email is required."),
      password: string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Please provide strong Password"
        ),
      confirmPassword: string().oneOf(
        [ref("password"), null],
        "Passwords must match"
      ),
    });
    super(inputElements, registerSchema);
  }

  submitForm = async () => {
    try {
      const { confirmPassword, ...rest } = this.fields;
      const res = await axiosInstance.post("register", rest);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  async submit(event) {
    super.submit(event);
    await this.submitForm();
    this.clearForm();
  }
}

export default Register;

import React from "react";
import "./styles.css";
import TextInput from "./components/textInput";
import Form from "./components/form";
import PasswordWithChecklist from "./components/passwordWithChecklist";

export default function App(): JSX.Element {
  const onSubmit = (data: FormData) => {
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <h2>A simple form</h2>
        <TextInput label="Name:" id="name" name="name" required />
        <TextInput
          label="Email:"
          id="email"
          type="email"
          name="email"
          required
        />
        <TextInput label="Address:" id="address" name="address" />
        <TextInput
          label="Tel:"
          id="tel"
          name="tel"
          type="tel"
          pattern="((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}" // don't rely on this
        />

        <PasswordWithChecklist name="password" label="Password" id="pwd" />

        <button>Submit</button>
      </Form>
    </div>
  );
}

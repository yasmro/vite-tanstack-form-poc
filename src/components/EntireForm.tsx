import FormContextProvider from "../context/FormContext";
import Form1 from "./Form1";
import Form2 from "./Form2";

export default function EntireForm() {
  return (
    <FormContextProvider>
      <Form1 />
      <Form2 />
    </FormContextProvider>
  );
}

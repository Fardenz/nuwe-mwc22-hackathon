import { Layout } from "../Layout/Layout";
import { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import {
  Title,
  ButtonSave,
  Label,
  WrapperForm,
  Form,
  Camp,
  Input,
} from "./style";

const FormCompany = () => {
  const [error, setError] = useState(false);
  const [company, setCompany] = useState({
    name: "",
    website: "",
    total_flights: "",
    total_seats: "",
  });

  const { name, website, total_flights, total_seats } = company;

  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };
  const sendObject = async () => {
    await axios.post("https://nuwe-mwc-22.herokuapp.com/companies", company);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    //validacion
    if (
      name === "" ||
      website === "" ||
      total_flights === "" ||
      total_seats === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    sendObject();

    Router.push("/allcompanies");
  };

  return (
    <Layout>
      <WrapperForm>
        <Form column onSubmit={onSubmitForm}>
          <Title>Add Company</Title>
          <Camp>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Website</Label>
            <Input
              type="text"
              name="website"
              value={website}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Total flights</Label>
            <Input
              type="number"
              name="total_flights"
              value={total_flights}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Total seats</Label>
            <Input
              type="number"
              name="total_seats"
              value={total_seats}
              onChange={handleChange}
            />
          </Camp>
          <ButtonSave type="submit">Save Company</ButtonSave>
          {error ? <p> Rellena todos los campos</p> : null}
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormCompany;

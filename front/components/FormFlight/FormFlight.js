import { Layout } from "../Layout/Layout";
import {
  Select,
  WrapperForm,
  Form,
  Camp,
  Label,
  Input,
  Title,
  ButtonSave,
} from "../FormCompany/style";
import { useState } from "react";
import Router from "next/router";
import { countryList } from "../../services/paises";

const initalState = {
  company_id: "",
  date: "",
  origin_country: "",
  origin_continent: "",
  seats: "",
  destination_country: "",
  destination_continent: "",
};

const FormFlight = () => {
  const [error, setError] = useState(false);
  const [flight, setFlight] = useState(initalState);

  const {
    company_id,
    date,
    origin_country,
    origin_continent,
    seats,
    destination_country,
    destination_continent,
  } = flight;

  const handleChange = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //validación
    if (
      company_id === "" ||
      date === "" ||
      origin_country === "" ||
      origin_continent === "" ||
      seats === "" ||
      destination_country === "" ||
      destination_continent === ""
    ) {
      setError(true);
      return;
    }
    Router.push / setError(false);
    /*axios.post('url' , flight)
    //.then(res => {
      console.log(res);
      console.log(res.data)
    })*/
    Router.push("/allcompanies");
  };

  return (
    <Layout>
      <WrapperForm>
        <Form onSubmit={onSubmitForm}>
          <Title absolute>Add Flights</Title>
          <Camp>
            <Label>CompanyID</Label>
            <Input
              type="text"
              name="company_id"
              value={company_id}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Data</Label>
            <Input
              type="text"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Origin Country</Label>
            <Select
              onChange={handleChange}
              name="origin_country"
              value={origin_country}
            >
              {countryList.map((pais) => (
                <option key={pais} name="origin_country">
                  {pais}
                </option>
              ))}
            </Select>
          </Camp>
          <Camp>
            <Label>Destination Country</Label>
            <Select
              onChange={handleChange}
              name="destination_country"
              value={destination_country}
            >
              {countryList.map((pais) => (
                <option key={pais} name="destination_country">
                  {pais}
                </option>
              ))}
            </Select>
          </Camp>

          <Camp>
            <Label>Origin Continent</Label>
            <Input
              type="text"
              name="origin_continent"
              value={origin_continent}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Destination Continent</Label>
            <Input
              type="text"
              name="destination_continent"
              value={destination_continent}
              onChange={handleChange}
            />
          </Camp>
          <Camp>
            <Label>Seats</Label>
            <Input
              name="seats"
              type="text"
              value={seats}
              onChange={handleChange}
            />
          </Camp>

          <ButtonSave type="submit" absolute>
            Save Flight
          </ButtonSave>
          {error ? <p>Rellena todos los campos</p> : null}
        </Form>
      </WrapperForm>
    </Layout>
  );
};

export default FormFlight;

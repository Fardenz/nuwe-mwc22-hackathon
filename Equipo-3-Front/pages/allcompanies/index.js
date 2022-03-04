import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  ButtonCompany,
  TableContainer,
  ButtonContainer,
  AllCompaniesContainer,
  Title,
} from "./style";
import { AgGridReact } from "ag-grid-react";
import { Layout } from "../../components/Layout/Layout";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Link from "next/link";
import axios from "axios";

const AllCompanies = () => {
  const gridRef = useRef(null);

  const checkboxSelection = (params) => {
    return params.node.group === true;
  };

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.id}`)
      .join(", ");
    const id = selectedDataStringPresentation;
    deleteCompany(id);
  };

  const [rowData, setRowData] = useState();

  const getApi = () => {
    axios.get("https://nuwe-mwc-22.herokuapp.com/companies/").then((res) => {
      setRowData(res.data);
    });
  };

  const deleteCompany = async (id) => {
    await axios.delete(`http://nuwe-mwc-22.herokuapp.com/companies/${id}`);
    getApi();
  };

  const updated = (id) => {
    rowData.filter((data) => data.id !== id);
  };

  console.log(updated);

  useEffect(() => {
    getApi();
  }, []);

  const gridStyle = useMemo(() => ({ height: "550px", width: "803px" }), []);
  const suppressRowHoverHighlight = true;
  const columnHoverHighlight = true;
  const pagination = true;
  const paginationPageSize = 10;

  const [columnDefs] = useState([
    {
      field: "name",
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
    },
    { field: "website", sortable: true, filter: true, resizable: true },
    {
      field: "total_flights",
      headerName: "Total Flights",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    {
      field: "total_seats",
      headerName: "Total Seats",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
  ]);

  return (
    <Layout>
      <AllCompaniesContainer>
        <Title>All Companies</Title>
        <TableContainer>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection="multiple"
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              suppressRowHoverHighlight={suppressRowHoverHighlight}
              columnHoverHighlight={columnHoverHighlight}
              groupSelectsChildren={true}
            ></AgGridReact>
          </div>
        </TableContainer>
        <ButtonContainer>
          <ButtonCompany>
            <Link href="/company-form">
              <a>
                <li>Add Company</li>
              </a>
            </Link>
          </ButtonCompany>
          <ButtonCompany>
            <Link href="/flight-form">
              <a>
                <li>Add Flight</li>
              </a>
            </Link>
          </ButtonCompany>
          <ButtonCompany>Fetch Companies</ButtonCompany>
          <ButtonCompany onClick={onButtonClick}>Delete Company</ButtonCompany>
        </ButtonContainer>
      </AllCompaniesContainer>
    </Layout>
  );
};

export default AllCompanies;

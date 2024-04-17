import { useState } from "react";
import SimpleTable from "./components/SimpleTable";
import data from "../MOCK_DATA (1).json";
import dayjs from "dayjs";

function App() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "name",
    },
    {
      header: "Apellido",
      accessorKey: "lastname",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Ciudad",
      accessorKey: "country",
    },
    {
      header: "Date Or Birth",
      accessorKey: "dateOrBirth",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    },
  ];

  return (
    <>
      <SimpleTable data={data} columns={columns} />
    </>
  );
}

export default App;

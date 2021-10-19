import "./ProduitList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productBarRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProduitList() {
  //const [data, setData] = useState(productRows);
  const [data, setData] = useState(productBarRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Produit",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <p>{params.row.name}</p>
          </div>
        );
      },
    },
    { field: "category", headerName: "Catégorie", width: 200 },
    {
      field: "capacity",
      headerName: "Contenance",
      width: 166,
    },
    {
      field: "price",
      headerName: "Prix",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/produit/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    ];
  return (
    
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Liste des produits</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        // pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
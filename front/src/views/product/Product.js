import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/chart/Chart"
import {productBarRows} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useState } from "react";
import {useParams} from "react-router-dom";
 
function Product() {
    // const id = this.props.match.params.produitId
    const [data, setData] = useState(productBarRows);
    const {produitId} = useParams();
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

  return (
 
    <div className="product">
      
      <div className="productTitleContainer">
        <h1 className="productTitle">Produit</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src= { data[produitId].imageUrl } alt="" className="productInfoImg" />
                  <span className="productName"> { data[produitId].name }</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id :</span>
                      <span className="productInfoValue"> { data[produitId].id }</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Catégorie :</span>
                      <span className="productInfoValue"> { data[produitId].category }</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Contenance :</span>
                      <span className="productInfoValue"> { data[produitId].contenance }</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Coût de revient :</span>
                      <span className="productInfoValue"> { data[produitId].costPrice }</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Prix :</span>
                      <span className="productInfoValue"> { data[produitId].price }</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
export default Product;
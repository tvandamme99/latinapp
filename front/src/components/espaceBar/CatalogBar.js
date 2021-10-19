import { useState } from 'react';
import itemsProduct from '../../data';
import Menu from './ProductView';
import Button from './FilterButtonBar';
import './CatalogBar.css'
const allCategories = ['All', ...new Set(itemsProduct.map(itemProduct => itemProduct.category))];

// console.log(allCategories);

function CatalogBar() {
  const [productItem, setProductItem] = useState(itemsProduct);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setProductItem(itemsProduct);
      return;
    }

    const filteredData = itemsProduct.filter(itemProduct => itemProduct.category ===  button);
    setProductItem(filteredData)
  }

    return (
    <div className="widgetLg_caisse_bar">
      <div className="catalog">
        <div className="filter">
          <Button button={buttons} filter={filter} />
        </div>
        <div className="product">
          <Menu productItem={productItem}/>
        </div>
          

      </div>
    </div>
  );
}

export default CatalogBar;




// import "./WidgetLg.css";

// export default function WidgetLg() {
//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}>{type}</button>;
//   };
//   return (
//     <div className="widgetLg">
//       
//     </div>
//   );
// }
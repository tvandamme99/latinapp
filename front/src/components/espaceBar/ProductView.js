import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { productBarRows } from "../../dummyData";
import { useState } from "react";
import './ProductView.css';

function ProductView({productItem}) {
    const [data, setData] = useState(productBarRows);
    return (
    <div className="productItem">
         {productItem.map((data) =>{
        return <div className="item-con" key={data.id}>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={data.imageUrl}
                alt={data.name}
            />
        <CardContent className="title">
            <Typography gutterBottom variant="h5" component="div">
                {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.price} €
            </Typography>
      </CardContent>
      <CardActions className="buttonAction">
        <Button size="small" className="buttonAction">Acheter</Button>
      </CardActions>
    </Card>
    </div>
         })}
         
         </div>

    //ANCIEN CODE 
        // <div className="productItem">
        //     {productItem.map((itemProduct) =>{
        //             return <div className="item-con" key={itemProduct.id}>
        //                 <div className="item-container">
        //                     <img src={itemProduct.imageUrl} alt={itemProduct.name}/>
        //                     <h2>{itemProduct.name}</h2>
        //                     <p>{itemProduct.contenance}</p>
        //                 </div>
        //             </div>
        //         })
        //     }
        // </div>
    )
}

export default ProductView;
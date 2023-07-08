import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import {Rating} from 'primereact/rating'
import './css/Products.css'

function Grid(props) {
  const products = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",

      category: "Accessories",
      quantity: 24
     
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      description: "Product Description",
      image: "black-watch.jpg",
      
      category: "Accessories",
      quantity: 61
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
     
      category: "Fitness",
      quantity: 2,
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Blue T-Shirt",
      description: "Product Description",
      image: "blue-t-shirt.jpg",

      category: "Clothing",
      quantity: 25
    },
  ];
  const renderGridItem = (data) => {
    return (
      <div className="col-12 md:col-4">

        <div className="product-grid-item card">
          <div className="product-grid-item-top">
           
          </div>
          <div className="product-grid-item-content">
            <img
              src={`images/product/${data.image}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={data.name}
            />
            <div className="product-name">{data.name}</div>
            <div className="product-description">{data.description}</div>
          
          </div>
          <div className="product-grid-item-bottom">
            {/* <Button
              icon="pi pi-pencil"
              label="Edit"
              disabled={data.inventoryStatus === "OUTOFSTOCK"}
            ></Button> */}
         
          </div>
        </div>
      </div>
    );
  };
  const itemTemplate = (product, layout) => {
    if (!product) {
        return;
    }
   return renderGridItem(product);
}
const renderHeader = () => {
  return (
      <div className="grid grid-nogutter">
          {/* <div className="col-6" style={{textAlign: 'left'}}>
              <Dropdown options={sortOptions} value={sortKey} optionLabel="label" placeholder="Sort By Price" onChange={onSortChange}/>
          </div>
          <div className="col-6" style={{textAlign: 'right'}}>
              <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
          </div> */}
      </div>
  );
}

const header = renderHeader();

  return (
    <div className="dataview-demo">
      <div className="card">
      <h2>{props.name}</h2>
        <DataView
          value={products}
          layout="grid"
          header={header}
          itemTemplate={itemTemplate}
          paginator
          rows={9}
          
        />
      </div>
    </div>
  );
}

export default Grid;

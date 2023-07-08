import React from "react";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import './css/Products.css'

function Posts() {
  const clubs = [
    {
      id: "1000",
      name: "Badminton Post",
      description: "Post Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "Books Post",
      description: "Post Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "CS Post",
      description: "Post Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "Coding Post",
      description: "Post Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    }
  ];
  const renderGridItem = (data) => {
    return (
      <div>
    
      
      <div className=" col-12 md:col-5">

        <div className="product-grid-item card">
          <div className="product-grid-item-top">
           
          </div>
          <div className="product-grid-item-content">
            <img
              src={data.image}
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
         
        
          
            <Button
              icon="pi pi-trash"
              label="Delete"
            ></Button>
          </div>
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


  return (
    <div className="dataview-demo">
      {/* <Button label="Add Post"></Button> */}
      <div className="card">
      <h2>Posts/Posts</h2>
        <DataView
          value={clubs}
          layout="grid"
      
          itemTemplate={itemTemplate}
          rows={4}
          
        />
      </div>
    </div>
  );
}

export default Posts;

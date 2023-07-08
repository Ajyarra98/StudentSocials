import React from "react";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import './../css/Products.css'
import StudentNavBar from '../navbars/StudentNavBar'

function StudentClubs() {
  const clubs = [
    {
      id: "1000",
      name: "Badminton Club",
      description: "Club Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "Books Club",
      description: "Club Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "CS Club",
      description: "Club Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    },
    {
      id: "1000",
      name: "Coding Club",
      description: "Club Description",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"
     
    }
  ];
  const renderGridItem = (data) => {
    return (
      <div>
   
      <div >
      <div className="">
      <div className="px-3 w-full col-12 ">

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
              icon="pi pi-pencil"
              label="Join"
            >
            </Button>
            {/* <Button
              icon="pi pi-pencil"
              label="Leave"
            >
            </Button> */}
            {/* <Button
              icon="pi pi-pencil"
              label="Edit"
              disabled={data.inventoryStatus === "OUTOFSTOCK"}
            ></Button> */}
              {/* <Button
                icon="pi pi-trash"
                label="Delete"
              ></Button> */}
          </div>
        </div>
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
      {/* <Button label="Add Club"></Button> */}
      <div className="card">
      <h2></h2>
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

export default StudentClubs;

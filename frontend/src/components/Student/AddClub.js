import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function AddClub() {
  return (
    <div className=" w-full">
      <div className="flex align-items-center justify-content-left">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3"> </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-900 font-medium mb-2"
            >
              Name
            </label>
            <InputText id="name" type="text" className="w-full mb-3" />

           

            <label htmlFor="phone" className="block text-900 font-medium mb-2">
              Content
            </label>
            <InputText id="phone" type="text" className="w-full mb-3" />
  

            <Button label="Add" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClub;

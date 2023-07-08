import React from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

function AddBusinessOwners() {
  return (
    <div className="pt-8">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Add Business Owners</div>
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
              Phone Number
            </label>
            <InputText id="phone" type="text" className="w-full mb-3" />
  

            <Button label="Submit" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBusinessOwners;

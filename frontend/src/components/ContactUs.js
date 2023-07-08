import React from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

function ContactUs() {
  return (
    <div className="pt-8">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Contact Us</div>
          </div>

          <div>
            <label
              htmlFor="firstname"
              className="block text-900 font-medium mb-2"
            >
              First Name
            </label>
            <InputText id="firstname" type="text" className="w-full mb-3" />

            <label
              htmlFor="lastname"
              className="block text-900 font-medium mb-2"
            >
              Last Name
            </label>
            <InputText id="lastname" type="text" className="w-full mb-3" />
            <label htmlFor="phone" className="block text-900 font-medium mb-2">
              Phone
            </label>
            <InputText id="phone" type="text" className="w-full mb-3" />

            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText id="email" type="text" className="w-full mb-3" />
            
            <label htmlFor="query" className="block text-900 font-medium mb-2">
              Query
            </label>
            <InputTextarea
            id="query"
            className="w-full mb-3"
              rows={5}
              cols={90}
              // value={value}
              // onChange={(e) => setValue(event.target.value)}
            />

            <Button label="Submit" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

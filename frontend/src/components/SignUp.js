import React from "react";
import {InputText} from 'primereact/inputtext'
import {Checkbox} from 'primereact/checkbox'
import {Button} from 'primereact/button'
function SignUp() {
  

  return (
    <div className="pt-8">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
      
            <div className="text-900 text-3xl font-medium mb-3">
              Register
            </div>
          
          
          </div>

          <div>
          <label htmlFor="name" className="block text-900 font-medium mb-2">
              Name
            </label>
            <InputText id="name" type="text" className="w-full mb-3" />
            <label htmlFor="dob" className="block text-900 font-medium mb-2">
              Date of Birth
            </label>
            <InputText id="dob" type="date" className="w-full mb-3" />
            <label htmlFor="address" className="block text-900 font-medium mb-2">
              Address
            </label>
            <InputText id="address" type="text" className="w-full mb-3" />
            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Email
            </label>
            <InputText id="email" type="text" className="w-full mb-3" />

            <label
              htmlFor="password"
              className="block text-900 font-medium mb-2"
            >
              Password
            </label>
            <InputText id="password" type="password" className="w-full mb-3" />

           

            <Button label="Register" icon="pi pi-user" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

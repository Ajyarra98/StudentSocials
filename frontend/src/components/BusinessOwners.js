import React from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'

const BusinessOwners = () => {
    const owners = [{'name': 'David',  'phone':'333333333' },{'name': 'Ben',  'phone':'333333333' }]
    return (
        <div>
            <div>
            <div className="card">
                <DataTable value={owners} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column field="phone" header="Phone"></Column>
                </DataTable>
            </div>
        </div>
        </div>
    )
}

export default BusinessOwners

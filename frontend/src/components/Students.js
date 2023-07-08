import React from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'

const Students = () => {
    const students = [{'name': 'David', 'id' :'12', 'section': 'A', 'phone':'333333333' },{'name': 'Ben', 'id' :'11', 'section': 'B', 'phone':'333333333' }]
    return (
        <div>
            <div>
            <div className="card">
                <DataTable value={students} responsiveLayout="scroll">
                    <Column field="name" header="Name"></Column>
                    <Column field="id" header="ID"></Column>
                    <Column field="section" header="Section"></Column>
                    <Column field="phone" header="Phone"></Column>
                </DataTable>
            </div>
        </div>
        </div>
    )
}

export default Students

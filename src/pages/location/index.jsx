import React from 'react'
import AddLocation from './layouts/AddLocation'
import DataTable from 'react-data-table-component'

const Location = () => {
    const columns = [
        {
            name : '#',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Location Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: row => <button className='bg-blue-500 text-white px-4 py-2 rounded'>Edit</button>,
        },
    ];
    const data = [
        { id: 1, name: 'Location A' },
        { id: 2, name: 'Location B' },
        { id: 3, name: 'Location C' },
    ];
  return (
    <div className='border-2 border-amber-300'>
      <AddLocation/>
      <div className='text-white'>
        table
        <DataTable columns={columns} data={data} fixedHeader pagination />
      </div>
    </div>
  )
}

export default Location

// src/components/SecondPageComponent1.tsx

import { DataGrid, GridRowId } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

interface RowData {
  id: number;
  title: string;
  body: string;
}

const SecondPageComponent1 = () => {
  const [rows, setRows] = useState<RowData[]>([]);

  useEffect(() => {
    // Fetch your data from the API and set it to the rows state
    // For example, you can use fetch() to get the data
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleRowSelection = (selectedRows: GridRowId[]) => {
    // Handle the selected rows here
    console.log('Selected Rows:', selectedRows);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'title', headerName: 'Title', width: 200 },
          { field: 'body', headerName: 'Body', width: 400 },
        ]}
        checkboxSelection
        onRowSelectionModelChange={handleRowSelection} // Corrected prop name here
      />
      <Button variant="contained" color="primary" onClick={() => console.log('Do something')}>
        Do Something
      </Button>
    </div>
  );
};

export { SecondPageComponent1 };

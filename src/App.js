import React from 'react';
import UploadForm from './components/UploadForm';
import DataTable from './components/DataTable';

const App = () => {

  // TODO context API pro čtení dat, refresh tabulky automagicky
  // reload metodou na contextu

  const refreshData = () => {
    console.log('refreshing...');
  }

  return (
    <div className="App">
      <UploadForm onSubmit={refreshData} />
      <DataTable />
    </div>
  );
}

export default App;

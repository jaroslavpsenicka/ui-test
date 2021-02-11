import React from 'react';

import UploadForm from './components/UploadForm';
import DataTable from './components/DataTable';
import SubmitButton from './components/SubmitButton';
import SubmitResult from './components/SubmitResult';

const App = () => {

  return (
    <div className="App">
      <h2>Form</h2>
      <UploadForm />
      <SubmitButton />
      <SubmitResult />
      <h2>Data</h2>
      <DataTable />
    </div>
  );
}

export default App;

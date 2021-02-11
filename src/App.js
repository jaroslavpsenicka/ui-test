import React from 'react';

import UploadForm from './components/UploadForm';
import DataTable from './components/DataTable';
import SubmitButton from './components/SubmitButton';
import SubmitResult from './components/SubmitResult';

const App = () => {

  return (
    <div className="App">
      <UploadForm />
      <SubmitButton />
      <SubmitResult />
      <DataTable />
    </div>
  );
}

export default App;

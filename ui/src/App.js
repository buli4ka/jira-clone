import React from 'react';
import './App.css';
import Table from 'components/table/table';
import { useQuery } from '@apollo/client';
import { GET_COLUMNS } from 'api/queries';
import LayoutContainer from 'components-ui/layout-container/layout-container';
import Header from 'components/header/header';

function App() {
  const { data, loading, refetch } = useQuery(GET_COLUMNS);

  if (loading) return <div>Loading...</div>;


  return (
    <LayoutContainer>
      <Header />
      <Table boards={data?.getColumns} refetch={refetch}/>
    </LayoutContainer>
  )

}

export default App;

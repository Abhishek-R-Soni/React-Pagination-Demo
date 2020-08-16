import React, {useState} from 'react';
import data from './data/db.json';
import Shipments from './Components/Shipment';
import Pagination from './Components/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(5)
  
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => setCurrentPage(num)

  return (
    <React.Fragment>      

      <Shipments data={currentPosts}/>

      <Pagination page={dataPerPage} totalPosts={data.length} paginate={paginate}/>
    </React.Fragment>
  );
}

export default App;

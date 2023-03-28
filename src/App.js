import React ,{useState, useEffect} from 'react';
import {Collection} from './Collection'
import './index.scss';

const cats = [
  { "name": "All" },
  { "name": "Sea" },
  { "name": "Mountains" },
  { "name": "Architecture" },
  { "name": "Cities" }
]

function App() {
  const [categoryId, setCategoryId] = useState(0)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setIsLoading(true)

    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://641df2c50596099ce158183b.mockapi.io/collections?page=${page}&limit=3&${category}`)
    .then((res)=> res.json())
    .then((json) => {
      setCollections(json);
    })
    .catch((err) => {
      console.warn(err);
      alert('Error while getting data')
    })
    .finally(() => setIsLoading(false))
  },[categoryId, page])

  return (
    <div className="App">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          {
            cats.map((obj, i) => ( 
              <li 
                onClick={() => setCategoryId(i)}
                className={categoryId === i ? 'active' : ''}
                key={obj.name}>
                {obj.name}
              </li>
          ))}
        </ul>
        <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
       {isLoading ? (
        <h2>Loading in progress...</h2> 
       ) : ( 
        collections
          .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}
            />
          )))}
         
      </div>
      <ul className="pagination">
        {
          [...Array(3)].map((_, i) => (
            <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
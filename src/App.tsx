import { CharactersTable } from "./components/CharactersTable"
import { SearchBar } from "./components/SearchBar"
import { useEffect, useState } from 'react';
import DataTable, {TableColumn} from 'react-data-table-component';
import { fetchData } from './services/fetchData';

export interface DataRow {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

function App() {

  // Data to show
  const [data, setData] = useState<DataRow[]>([])

  // page count
  const [pageCount, setPageCount] = useState<number>(0)

  // current page
  const [currentpage, setCurrentPage] = useState<number>(1)

  // get data function
  async function getData(pageNumber:number) {
      try{
          const fullData = await fetchData(pageNumber)
          const results = fullData.results
          console.log(fullData.count)
          const totalPageCount = parseInt(fullData.count)/results.length
          setPageCount(Math.floor(totalPageCount))
          setData(results)
      }
      catch (e) {
          console.log(e)
      }
  }

  // Initial data fetch (loads first page on first load)
  useEffect(() => {
      getData(1)
  }, [])

  // handles next page
  async function handleNextClick(e) {
    e.preventDefault()
    setCurrentPage(currentpage => currentpage + 1)
    const fullData = await fetchData(currentpage)
    const results = fullData.results
    setData(results)
  }

  return (
    <div>
      <SearchBar setData={setData}/>
      <CharactersTable data={data}/>
      <div>
        <p>Page {currentpage} of {pageCount}</p>
        <button onClick = {handleNextClick}>next</button>
        <button disabled={currentpage>1?false:true}>previous</button>
      </div>
    </div>
  )
}

export default App

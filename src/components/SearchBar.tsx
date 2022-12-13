import { ChangeEvent, Dispatch, SetStateAction, useState, MouseEvent } from "react"
import { DataRow } from "../App"
import { fetchSearchData } from "../services/fetchData"

type SearchBarProps = {
    setData: Dispatch<SetStateAction<DataRow[]>>
}

export function SearchBar({setData}: SearchBarProps) {
    // Value in searchbox
    const [seachValue, setSearchValue] = useState<string>('')

    // handle changes on the input
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.currentTarget.value)
    }

    // handle search click
    async function handleSearchClick(e: MouseEvent<HTMLButtonElement>) {
        // prevent redirection
        e.preventDefault()
        // fetch data
        const searchResults = await fetchSearchData(seachValue)
        // set table data as results
        setData(searchResults.results)
    }

    return (
        <form>
            <input value={seachValue} onChange = {handleChange}></input>
            <button onClick={handleSearchClick}>search</button>
        </form>
    )
}
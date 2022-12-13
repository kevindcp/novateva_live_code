// Get data from api (always async)
export async function fetchData(pageNumber: number) {
    // fetch data 
    const res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    // transform into json
    const data = res.json()
    return data
}

// Get data from api for a particular search (always async)
export async function fetchSearchData(searchValue: string) {
    // fetch data 
    const res = await fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
    // transform into json
    const data = res.json()
    return data
}
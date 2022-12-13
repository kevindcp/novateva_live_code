import DataTable, {TableColumn} from 'react-data-table-component';
import { DataRow } from '../App';


type CharactersTableProps = {
    data: DataRow[]
}

export function CharactersTable({data}: CharactersTableProps) {
    // Data table columns definition
    const columns: TableColumn<DataRow>[] = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Height',
            selector: row => row.height,
        },
        {
            name: 'Mass',
            selector: row => row.mass,
        },
        {
            name: 'Hair Color',
            selector: row => row.hair_color,
        },
    ]


    return (
        <DataTable columns={columns} data={data}/>
    )
}
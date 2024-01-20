import {
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'imageUrl',
        headerName: 'Image',
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams) => (
            <img
                src={params.row.imageUrl}
                alt="avatar"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
            />
        ),
        sortable: false,
        filterable: false,
    },
    {
        field: 'title',
        headerName: 'Title',
        flex: 1,
        minWidth: 200,
        hideable: false,
    },
    {
        field: 'likes',
        headerName: 'Likes',
        flex: 1,
        minWidth: 200,
        valueGetter: (params: GridValueGetterParams) => params.row.likes.length,
        type: 'number',
    },
    {
        field: 'createdAt',
        headerName: 'Created at',
        flex: 1,
        minWidth: 200,
        valueGetter: (params: GridValueGetterParams) => new Date(params.row.createdAt),
        type: 'date',
    },
];

export default columns;

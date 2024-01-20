import {
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import AdminRoleButton from './adminRoleButton/adminRoleButton';

const columns: GridColDef[] = [
    {
        field: 'picture',
        headerName: 'Avatar',
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams) => (
            <img
                src={params.row.picture}
                alt="avatar"
                width={80}
                height={80}
                className="w-20 h-20"
            />
        ),
        sortable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 200,
    },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
    {
        field: 'Admin',
        headerName: 'Admin',
        flex: 1,
        minWidth: 200,
        valueGetter: (params: GridValueGetterParams) =>
            params.row.role.includes('Admin') ? '✓' : '-',
    },
    {
        field: 'admin-button',
        headerName: '',
        flex: 1,
        minWidth: 200,
        renderCell: (params: GridRenderCellParams) => (
            <AdminRoleButton
                isAdmin={params.row.role.includes('Admin')}
                userId={params.row.sub}
            />
        ),
    },
];

export default columns;

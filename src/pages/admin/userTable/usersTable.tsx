import { DataGrid } from '@mui/x-data-grid';
import { IUser } from 'ts/interfaces';
import columns from './tableSettings';

function Table({ userData }: { userData: IUser[] }) {
    return (
        <div className=" m-auto ">
            <DataGrid
                rows={userData}
                getRowId={(row) => row.sub}
                columns={columns}
                getRowClassName={() => `user-table-row user-table-row-styles`}
                autoHeight
                hideFooter
                getRowHeight={() => 'auto'}
                className="user-table user-table-styles"
            />
        </div>
    );
}

export default Table;

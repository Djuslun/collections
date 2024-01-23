import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import useLocalTextTable from 'hooks/useLocalTextTable';
import { IUser } from 'ts/interfaces';
import { TSetState } from 'ts/types';
import useTableSettings from './useTableSettings';

function Table({
    userData,
    userIds,
    setUserIds,
}: {
    userData: IUser[];
    userIds: GridRowSelectionModel | string[];
    setUserIds: TSetState<GridRowSelectionModel | string[]>;
}) {
    const localeText = useLocalTextTable();
    const columns = useTableSettings();

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
                checkboxSelection
                localeText={localeText}
                onRowSelectionModelChange={setUserIds}
                rowSelectionModel={userIds}
            />
        </div>
    );
}

export default Table;

/* eslint-disable react/jsx-no-useless-fragment */
import { DataGrid, GridEventListener } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import EmptyState from 'components/emptyStates/emptyState';
import useLocalTextTable from 'hooks/useLocalTextTable';
import { ClientUrls } from 'ts/enums';
import { Item } from 'ts/interfaces';
import useItemTableSettings from './useItemTableSettings';

function ItemTable({ items }: { items: Item[] }) {
    const localeText = useLocalTextTable();
    const navigate = useNavigate();
    const columns = useItemTableSettings(items);

    const handleEvent: GridEventListener<'cellKeyDown'> = (
        params, // GridCellParams<any>
        event, // MuiEvent<React.KeyboardEvent<HTMLElement>>
        details // GridCallbackDetails
    ) => {
        if (event.key === 'Enter') {
            navigate(`${ClientUrls.item}/${params.row._id}`);
        }
    };

    return (
        <>
            {items.length ? (
                <div className=" m-auto">
                    <DataGrid
                        rows={items}
                        getRowId={(row) => row._id}
                        columns={columns}
                        getRowClassName={() => `user-table-row user-table-row-styles`}
                        autoHeight
                        hideFooter
                        getRowHeight={() => 'auto'}
                        className="user-table user-table-styles"
                        localeText={localeText}
                        onRowClick={(params) =>
                            navigate(`${ClientUrls.item}/${params.row._id}`)
                        }
                        onCellKeyDown={handleEvent}
                    />
                </div>
            ) : (
                <EmptyState translationKey="item" />
            )}
        </>
    );
}

export default ItemTable;

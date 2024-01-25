/* eslint-disable consistent-return */
import {
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { Item } from 'ts/interfaces';

const useItemTableSettings = (items: Item[]) => {
    const { t } = useTranslation('translation', { keyPrefix: 'item.table' });

    const columns: GridColDef[] = [
        {
            field: 'imageUrl',
            headerName: t('image'),
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
            headerName: t('title'),
            flex: 1,
            minWidth: 200,
            hideable: false,
        },
        {
            field: 'likes',
            headerName: t('likes'),
            flex: 1,
            minWidth: 50,
            valueGetter: (params: GridValueGetterParams) => params.row.likes.length,
            type: 'number',
        },
        {
            field: 'createdAt',
            headerName: t('createdAt'),
            flex: 1,
            minWidth: 100,
            valueGetter: (params: GridValueGetterParams) =>
                new Date(params.row.createdAt),
            type: 'dateTime',
        },
        {
            field: 'createdBy',
            headerName: t('createdBy'),
            flex: 1,
            minWidth: 100,
        },
        {
            field: 'collectionTitle',
            headerName: t('collectionTitle'),
            flex: 1,
            minWidth: 100,
        },
    ];

    return columns;
};

export default useItemTableSettings;

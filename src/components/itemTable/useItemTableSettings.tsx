/* eslint-disable consistent-return */
import {
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { ICustomFieldItem, Item } from 'ts/interfaces';

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
            type: 'date',
        },
    ];

    const customFields = items[0]?.customFields.filter(
        (field) => field.type !== 'boolean' && field.type !== 'textarea'
    );

    const customFildsColumns: GridColDef[] =
        customFields?.map((field) => {
            if (field.type !== 'boolean' && field.type !== 'textarea') {
                return {
                    field: field.label,
                    headerName: field.label,
                    flex: 1,
                    minWidth: 150,
                    valueGetter: (params: GridValueGetterParams<Item>) => {
                        const customField = params.row.customFields.find(
                            (field: ICustomFieldItem) => field.label === params.field
                        );
                        if (customField?.type === 'date' && customField?.value) {
                            return new Date(customField?.value as string);
                        }
                        if (customField?.type === 'number' && customField?.value) {
                            return Number(customField?.value);
                        }
                        if (customField?.type === 'string' && customField?.value) {
                            return customField?.value;
                        }
                    },
                    type: field.type,
                } as GridColDef;
            }
            return {} as GridColDef;
        }) || [];

    return [...columns, ...customFildsColumns];
};

export default useItemTableSettings;

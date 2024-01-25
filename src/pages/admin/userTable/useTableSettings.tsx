import {
    GRID_CHECKBOX_SELECTION_COL_DEF,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';

const useTableSettings = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'userTable' });

    const columns: GridColDef[] = [
        {
            ...GRID_CHECKBOX_SELECTION_COL_DEF,
            hideable: false,
            headerName: t('checkBox'),
        },
        {
            field: 'picture',
            headerName: t('avatar'),
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
            field: 'nickname',
            headerName: t('nickname'),
            flex: 1,
            minWidth: 200,
            hideable: false,
        },
        { field: 'email', headerName: t('email'), flex: 1, minWidth: 200 },
        {
            field: 'Admin',
            headerName: t('admin'),
            flex: 1,
            minWidth: 200,
            valueGetter: (params: GridValueGetterParams) =>
                params.row.role.includes('Admin'),
            type: 'boolean',
        },
    ];

    return columns;
};

export default useTableSettings;

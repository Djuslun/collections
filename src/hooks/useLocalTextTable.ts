import { useTranslation } from 'react-i18next';

const useLocalTextTable = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'tableMenu' });

    const localText = {
        filterOperatorContains: t('filterOperatorContains'),
        filterOperatorEquals: t('filterOperatorEquals'),
        filterOperatorStartsWith: t('filterOperatorStartsWith'),
        filterOperatorEndsWith: t('filterOperatorEndsWith'),
        filterOperatorIs: t('filterOperatorIs'),
        filterOperatorNot: t('filterOperatorNot'),
        filterOperatorAfter: t('filterOperatorAfter'),
        filterOperatorOnOrAfter: t('filterOperatorOnOrAfter'),
        filterOperatorBefore: t('filterOperatorBefore'),
        filterOperatorOnOrBefore: t('filterOperatorOnOrBefore'),
        filterOperatorIsEmpty: t('filterOperatorIsEmpty'),
        filterOperatorIsNotEmpty: t('filterOperatorIsNotEmpty'),
        filterOperatorIsAnyOf: t('filterOperatorIsAnyOf'),
        columnMenuLabel: t('columnMenuLabel'),
        columnMenuShowColumns: t('columnMenuShowColumns'),
        columnMenuManageColumns: t('columnMenuManageColumns'),
        columnMenuFilter: t('columnMenuFilter'),
        columnMenuHideColumn: t('columnMenuHideColumn'),
        columnMenuUnsort: t('columnMenuUnsort'),
        columnMenuSortAsc: t('columnMenuSortAsc'),
        columnMenuSortDesc: t('columnMenuSortDesc'),
        filterPanelOperator: t('filterPanelOperator'),
        filterPanelColumns: t('filterPanelColumns'),
        filterPanelInputLabel: t('filterPanelInputLabel'),
        filterPanelInputPlaceholder: t('filterPanelInputPlaceholder'),
        columnHeaderSortIconLabel: t('columnHeaderSortIconLabel'),
        columnsPanelTextFieldLabel: t('columnsPanelTextFieldLabel'),
        columnsPanelTextFieldPlaceholder: t('columnsPanelTextFieldPlaceholder'),
        columnsPanelDragIconLabel: t('columnsPanelDragIconLabel'),
        columnsPanelShowAllButton: t('columnsPanelShowAllButton'),
        columnsPanelHideAllButton: t('columnsPanelHideAllButton'),
        noResultsOverlayLabel: t('noResultsOverlayLabel'),
    };

    return localText;
};

export default useLocalTextTable;

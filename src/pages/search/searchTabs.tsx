/* eslint-disable import/no-extraneous-dependencies */
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ItemTable from 'components/item/itemTable/itemTable';
import { ISearch } from 'ts/interfaces';

type TTabsValue = 'items' | 'collections' | 'comments';

function SearchTabs({ items }: { items: ISearch }) {
    const [value, setValue] = useState<TTabsValue>('items');
    const { t } = useTranslation('translation', { keyPrefix: 'search' });

    const handleChange = (event: React.SyntheticEvent, newValue: TTabsValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <div>
                <TabList
                    onChange={handleChange}
                    defaultValue="items"
                    className="tab-styles"
                >
                    <Tab label={t('inItems')} value="items" />
                    <Tab label={t('inCollections')} value="collections" />
                    <Tab label={t('inComments')} value="comments" />
                </TabList>
            </div>
            <TabPanel value="items">
                <ItemTable items={items.inItems} />
            </TabPanel>
            <TabPanel value="collections">
                <ItemTable items={items.inCollection} />
            </TabPanel>
            <TabPanel value="comments">
                <ItemTable items={items.inComments} />
            </TabPanel>
        </TabContext>
    );
}

export default SearchTabs;

import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';

const HomePage = lazy(() => import('pages/main/mainPage'));
const CollectionsPage = lazy(() => import('pages/collections/collectionsPage'));
const CollectionPage = lazy(() => import('pages/collection/collectionPage'));
const ItemPage = lazy(() => import('pages/item/itemPage'));
const ProfilePage = lazy(() => import('pages/profile/profilePage'));
const NewCollecton = lazy(() => import('pages/newCollection/newCollectionPage'));
const NewItemPage = lazy(() => import('pages/newItem/newItePage'));
const EditCollectionPage = lazy(() => import('pages/editCollection/editCollectiomPage'));

function Router() {
    return (
        <Suspense>
            <Routes>
                <Route index path={ClientUrls.homePage} element={<HomePage />} />
                <Route path={ClientUrls.collections} element={<CollectionsPage />} />
                <Route
                    path={`${ClientUrls.collection}/:id`}
                    element={<CollectionPage />}
                />
                <Route
                    path={`${ClientUrls.collection}/:id/edit`}
                    element={<EditCollectionPage />}
                />
                <Route path={`${ClientUrls.item}/:id`} element={<ItemPage />} />
                <Route path={ClientUrls.profile} element={<ProfilePage />} />
                <Route path={ClientUrls.newCollection} element={<NewCollecton />} />
                <Route path={ClientUrls.newItem} element={<NewItemPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}

export default Router;

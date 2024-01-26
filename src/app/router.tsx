import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoleRequired from 'components/wrappers/adminRoleRequired';
import AuthRequired from 'components/wrappers/authRequiered';
import { ClientUrls } from 'ts/enums';
import Loader from 'ui/loader/loader';

const HomePage = lazy(() => import('pages/main/mainPage'));
const CollectionsPage = lazy(() => import('pages/collections/collectionsPage'));
const CollectionPage = lazy(() => import('pages/collection/collectionPage'));
const ItemPage = lazy(() => import('pages/item/itemPage'));
const ProfilePage = lazy(() => import('pages/profile/profilePage'));
const NewCollecton = lazy(() => import('pages/newCollection/newCollectionPage'));
const NewItemPage = lazy(() => import('pages/newItem/newItemPage'));
const EditCollectionPage = lazy(() => import('pages/editCollection/editCollectiomPage'));
const EditItemPage = lazy(() => import('pages/editItem/editItemPage'));
const AdminPage = lazy(() => import('pages/admin/adminPage'));
const SearchPage = lazy(() => import('pages/search/searchPage'));
const SearchTagPage = lazy(() => import('pages/searchTag/searchTag'));

function Router() {
    return (
        <Suspense fallback={<Loader isLoading />}>
            <Routes>
                <Route index path={ClientUrls.homePage} element={<HomePage />} />
                <Route path={ClientUrls.collections} element={<CollectionsPage />} />
                <Route
                    path={`${ClientUrls.collection}/:id`}
                    element={<CollectionPage />}
                />
                <Route
                    path={`${ClientUrls.collection}/:id/edit`}
                    element={
                        <AuthRequired>
                            <EditCollectionPage />
                        </AuthRequired>
                    }
                />
                <Route path={`${ClientUrls.item}/:id`} element={<ItemPage />} />
                <Route
                    path={`${ClientUrls.item}/:id/edit`}
                    element={
                        <AuthRequired>
                            <EditItemPage />
                        </AuthRequired>
                    }
                />
                <Route
                    path={ClientUrls.profile}
                    element={
                        <AuthRequired>
                            <ProfilePage />
                        </AuthRequired>
                    }
                />
                <Route
                    path={ClientUrls.newCollection}
                    element={
                        <AuthRequired>
                            <NewCollecton />
                        </AuthRequired>
                    }
                />
                <Route
                    path={ClientUrls.newItem}
                    element={
                        <AuthRequired>
                            <NewItemPage />
                        </AuthRequired>
                    }
                />
                <Route
                    path={ClientUrls.admin}
                    element={
                        <AdminRoleRequired>
                            <AdminPage />
                        </AdminRoleRequired>
                    }
                />
                <Route path={ClientUrls.search} element={<SearchPage />} />
                <Route path={ClientUrls.searchTag} element={<SearchTagPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}

export default Router;

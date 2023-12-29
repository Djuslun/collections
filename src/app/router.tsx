import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/main/mainPage'));
const CollectionsPage = lazy(() => import('pages/collections/collectionsPage'));
const CollectionPage = lazy(() => import('pages/collection/collectionPage'));
const ItemPage = lazy(() => import('pages/item/itemPage'));
const ProfilePage = lazy(() => import('pages/profile/profilePage'));
const NewCollecton = lazy(() => import('pages/newCollection/newCollectionPage'));
const NewItemPage = lazy(() => import('pages/newItem/newItePage'));

function Router() {
    return (
        <Suspense>
            <main className="flex-1">
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/collections" element={<CollectionsPage />} />
                    <Route path="/collection/:id" element={<CollectionPage />} />
                    <Route path="/item/:id" element={<ItemPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/new-collection" element={<NewCollecton />} />
                    <Route path="/new-item" element={<NewItemPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
        </Suspense>
    );
}

export default Router;

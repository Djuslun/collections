/* eslint-disable react/jsx-no-useless-fragment */
import { WithChidlren } from 'ts/interfaces';

interface IOwnerEntitiOnly extends WithChidlren {
    userId: string | undefined;
    entitiId: string | undefined;
    isAdmin: boolean;
}

function OwnerEntitiOnly({
    userId = '',
    entitiId = '',
    isAdmin,
    children,
}: IOwnerEntitiOnly) {
    const isOwnerEntiti = userId && entitiId && userId === entitiId;

    return <>{(isOwnerEntiti || isAdmin) && children}</>;
}

export default OwnerEntitiOnly;

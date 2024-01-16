/* eslint-disable react/jsx-no-useless-fragment */
import { WithChidlren } from 'ts/interfaces';

interface IOwnerEntitiOnly extends WithChidlren {
    userId: string | undefined;
    entitiId: string | undefined;
}

function OwnerEntitiOnly({ userId = '', entitiId = '', children }: IOwnerEntitiOnly) {
    const isOwnerEntiti = userId && entitiId && userId === entitiId;

    return <>{isOwnerEntiti && children}</>;
}

export default OwnerEntitiOnly;

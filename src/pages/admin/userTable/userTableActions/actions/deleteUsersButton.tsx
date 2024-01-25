import { useTranslation } from 'react-i18next';
import { useDeleteUsersMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function DeleteUsersButton({ userIds }: { userIds: string[] }) {
    const [deleteUsers, { isLoading }] = useDeleteUsersMutation();
    const { t } = useTranslation('translation', { keyPrefix: 'userTable' });

    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => deleteUsers(userIds)}
            >
                {t('deleteUser')}
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default DeleteUsersButton;

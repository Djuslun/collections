import { useTranslation } from 'react-i18next';
import { useDeleteUserAdminRoleMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function DeleteAdminRoleButton({ userIds }: { userIds: string[] }) {
    const [deleteAdminRole, { isLoading }] = useDeleteUserAdminRoleMutation();
    const { t } = useTranslation('translation', { keyPrefix: 'userTable' });

    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => deleteAdminRole(userIds)}
            >
                {t('deleteAdmin')}
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default DeleteAdminRoleButton;

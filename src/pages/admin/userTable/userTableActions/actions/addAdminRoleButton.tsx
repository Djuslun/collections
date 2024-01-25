import { useTranslation } from 'react-i18next';
import { useAddUserAdminRoleMutation } from 'store/api/userApiSlice';
import Loader from 'ui/loader/loader';

function AddAdminRoleButton({ userIds }: { userIds: string[] }) {
    const [addAdminRole, { isLoading }] = useAddUserAdminRoleMutation();
    const { t } = useTranslation('translation', { keyPrefix: 'userTable' });

    return (
        <>
            <button
                type="button"
                className="button border-with-shadow"
                onClick={() => addAdminRole(userIds)}
            >
                {t('addAdmin')}
            </button>
            <Loader isLoading={isLoading} />
        </>
    );
}

export default AddAdminRoleButton;

import { Button } from '@mui/base';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function FormButtons() {
    const navigate = useNavigate();
    const { t } = useTranslation('translation', {
        keyPrefix: 'form',
    });
    return (
        <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate(-1)} type="button" className="button w-36">
                {t('cancel')}
            </Button>
            <Button type="submit" className="button w-36">
                {t('confirm')}
            </Button>
        </div>
    );
}

export default FormButtons;

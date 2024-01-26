import { useNavigate } from 'react-router-dom';
import { ClientUrls } from 'ts/enums';
import { ITag } from 'ts/interfaces';

function Tag({ tag }: { tag: ITag }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ClientUrls.searchTag, { state: tag });
    };

    return (
        <button
            type="button"
            onClick={() => handleClick()}
            className="bg-rose-400 inline-block px-2 p-1 rounded-sm mb-2 hover:scale-110 transition-all "
        >
            {tag.label}
        </button>
    );
}

export default Tag;

import { WithChidlren } from 'ts/interfaces';

function Container({ children }: WithChidlren) {
    return <div className="container mx-auto relative">{children}</div>;
}

export default Container;

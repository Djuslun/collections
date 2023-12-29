import { WithChidlren } from 'ts/interfaces';

function Container({ children }: WithChidlren) {
    return <div className="container mx-auto">{children}</div>;
}

export default Container;

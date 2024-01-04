import { User } from '@auth0/auth0-react';

function UserInfo({ user }: { user: User }) {
    return (
        <section className="user-info-section">
            <img src={user.picture} alt={user.name} className="user-image" />
            <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{user.nickname}</h2>
                <p className="text-lg sm:text-xl">{user.email}</p>
            </div>
        </section>
    );
}

export default UserInfo;

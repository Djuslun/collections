import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useGetAllUsersQuery } from 'store/api/userApiSlice';
import useError from 'hooks/useError';

const UseGetAllUsers = () => {
    const { data: users, isLoading, isError, error } = useGetAllUsersQuery();

    useError(isError, error as FetchBaseQueryError | undefined);
    return { users, isLoading };
};

export default UseGetAllUsers;

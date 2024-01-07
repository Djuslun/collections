import { Skeleton } from '@mui/material';

function UserInfoSkeleton() {
    return (
        <div className="info-section">
            <div className="info-image">
                <Skeleton
                    variant="rounded"
                    sx={{
                        height: '100%',
                        width: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
            </div>
            <div className="w-full smm:w-40">
                <Skeleton
                    variant="text"
                    sx={{ fontSize: '1.85rem', background: 'rgba(0, 0, 0, 0.5)' }}
                />
                <Skeleton
                    variant="text"
                    sx={{ fontSize: '1.125rem', background: 'rgba(0, 0, 0, 0.5)' }}
                />
            </div>
        </div>
    );
}

export default UserInfoSkeleton;

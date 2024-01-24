import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function ShadowLoading() {
    return (
        <>
           <Stack spacing={2}>
            <Skeleton variant="rounded" width={'80%'} height={60} />
            <Skeleton variant="rounded" width={'80%'} height={60} />
            <Skeleton variant="rounded" width={'80%'} height={60} />
            <Skeleton variant="rounded" width={'80%'} height={60} />
            <Skeleton variant="rounded" width={'80%'} height={60} />
            <Skeleton variant="rounded" width={'80%'} height={60} />
            </Stack> 
        </>
    );
}

export default ShadowLoading;
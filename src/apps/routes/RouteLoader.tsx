import { useRoutes } from 'react-router-dom';
import appRoutes from './Router';
import { Layout } from '@/apps/layout/index';
import { Suspense } from 'react';
import { Box } from '@mui/material';
import { TrSpinner } from '@/libs/ui';

const RouteLoader = () => {

    const routing = useRoutes(appRoutes());

    return (
        <Layout>
            <Suspense fallback={
                <Box>
                    <TrSpinner />
                </Box>
            }>
                {routing}
            </Suspense>
        </Layout>
    )
}

export default RouteLoader;
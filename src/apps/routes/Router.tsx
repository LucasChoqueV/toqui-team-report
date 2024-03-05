import React from 'react';

const LandingPage = React.lazy(() =>
    import('@/libs/pages/index').then((module) => ({
        default: module.LandingPage
    }))
);

const appRoutes = () => {

    const baseRoutes = [
        { path: '/', element: <LandingPage /> }
    ];

    return [...baseRoutes]
}

export default appRoutes;
import React from 'react';

const LandingPage = React.lazy(() =>
    import('@/libs/pages/index').then((module) => ({
        default: module.LandingPage
    }))
);

const JiraSoftwarePage = React.lazy(() =>
    import('@/libs/pages/index').then((module) => ({
        default: module.JiraSoftwarePage
    }))
);

const appRoutes = () => {

    const baseRoutes = [
        { path: '/', element: <LandingPage /> },
        { path: '/services/jira-software', element: <JiraSoftwarePage /> }
    ];

    return [...baseRoutes]
}

export default appRoutes;
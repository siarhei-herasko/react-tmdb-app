import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {routeList} from './routing.configs';

import Loading from 'components/loading';

const Routing = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                {routeList.map(({path, component: Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default Routing;

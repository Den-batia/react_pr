import React, { Suspense } from 'react';

export const withLazyComponent = (Component) => {

    const LazyComponent = () =>{
        return(
            <Suspense fallback={<div>Загрузка...</div>}>
                <Component/>
            </Suspense>
        )
    }

    return LazyComponent
}
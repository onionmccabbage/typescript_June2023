import React from 'react';
import './index.scss';

const Loader = (): JSX.Element => {
    return (
        <div className="loader">
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;

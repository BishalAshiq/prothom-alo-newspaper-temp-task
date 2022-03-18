import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import NewsPaper from '../NewsPapers/NewsPapers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsPaper></NewsPaper>
        </div>
    );
};

export default Home;
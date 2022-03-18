import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import NewsPapers from '../NewsPapers/NewsPapers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsPapers></NewsPapers>
        </div>
    );
};

export default Home;
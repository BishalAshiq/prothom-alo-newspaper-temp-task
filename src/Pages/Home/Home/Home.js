import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NewsPapers from '../NewsPapers/NewsPapers';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <NewsPapers></NewsPapers>
            <br/> <hr/>
            <Footer></Footer>
        </div>
    );
};

export default Home;
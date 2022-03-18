import React, { useEffect, useState } from 'react';
import NewsPaper from '../NewsPaper/NewsPaper';
import './NewsPapers.css';
import Nogod from '../../../Images/Nogod.png';
import Sweet from '../../../Images/Memories-Sweet-girl.webp';
import PPE from '../../../Images/PPE.webp';



const NewsPapers = () => {
    const [newsPapers, setNewsPapers] = useState([]);
    useEffect(() =>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data => setNewsPapers(data))
    }, []);

    return (
        <div id='newsPapers-container'>
            <div className='newsPapers'>
            {
                newsPapers.map(newsPaper => <NewsPaper
                key={newsPaper.id}
                newsPaper={newsPaper}
                ></NewsPaper>)
            }
            </div>

            <div className='side-camp'>
            <div>
                <img src={Nogod} alt=""/>
            </div> <br/>
            <div>
                <img src={Sweet} alt=''/>
            </div>
            <div className='PPE'>
                <img src={PPE} alt=''/>
                <p>করোনা প্রতিরোধে ব্যক্তিগত সুরক্ষা সরঞ্জাম (পিপিই) ও চিকিৎসাসামগ্রী উৎপাদনে বিনিয়োগ সহায়তা মিলছে। এ জন্য একটি প্রকল্প দাঁড় করিয়েছে বাণিজ্য মন্ত্রণালয়, যাতে অর্থায়ন করছে বিশ্বব্যাংক।</p>
            </div>
            </div>
        </div>
    );
};

export default NewsPapers;
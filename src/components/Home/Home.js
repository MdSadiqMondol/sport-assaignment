import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
     const [leagues,setLeague] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        .then(response => response.json())
        .then(data => setLeague(data.leagues))
        
    },[])
    return (
        <div>
          <Header></Header>
          <h1>total league :{leagues.length}</h1>  
           <div div className = "league" >
               {
               leagues.map(lg => <League league={lg}></League>)
           }
          </div>
        </div>
    );
};

export default Home;
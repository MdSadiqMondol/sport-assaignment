import React from 'react';
import { useHistory } from 'react-router-dom';

import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const League = (props) => {
   

    const { strLeague, idLeague, strSport } = props.league;
    const history = useHistory();
  	const LeagueDetails = (idLeague) => {
		const url = `/league/${idLeague}`;
		history.push(url);
	}
    console.log(props.league);
    return (
        <div className="league">
          <h1>name: {strLeague}</h1>
          <p>Sports type: {strSport}</p>
          <button button button className = "btn btn-primary"
          onClick = {
            () => LeagueDetails(idLeague)
          } > Explore < FontAwesomeIcon icon = {
            faAngleRight
          }
          /></button >
        </div>
    );
};

export default League;
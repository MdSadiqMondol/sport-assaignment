import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import youtube from '../../images/YouTube.png';
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';


const LeagueDetails = () => {
    const { idLeague } = useParams();
	const [league, setLeague] = useState({});
	useEffect(() => {
		const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
		fetch(url)
			.then(res => res.json())
			.then(data => setLeague(data.leagues[0]))
	}, [idLeague]);
	const { strBanner, strLogo, strLeague, strSport, strTwitter, strYoutube, strFacebook, strCountry, strDescriptionEN, strDescriptionFR, intFormedYear, strGender } = league;
	let gender;
	if (strGender === "Male") {
		gender = <img src={male} style={{ width: '100%' }} alt="" />;
	}
	else {
		gender = <img src={female} style={{ width: '100%' }} alt="" />;
	}
    return (
        <div>
           <div className="col-12 banner-logo">
			  <img src={strLogo} alt="" />
			</div>
            <div className="row league-wrapper">
                <div className="col-12 col-md-7">
                    <h3>{strLeague}</h3>
                    <h5>Founded: {intFormedYear}</h5>
                    <h5>Founded: {strCountry}</h5>
                    <h5>Founded: {strSport}</h5>
                    <h5>Founded: {strGender}</h5>
                </div>
            </div>
            <div className="col-12 col-md-5">
				{gender}
			</div>
            <div className="row my-4">
                <div className="col text-center social-media">
                   {/* <a href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter}/></a> */}
                    <a href={`https://${strTwitter}`}><img src={twitter} alt="" /></a>
				    <a href={`https://${strFacebook}`}><img src={facebook} alt="" /></a>
					<a href={`https://${strYoutube}`}><img src={youtube} alt="" /></a>
                </div>
            </div>
            
        </div>
    );
};

export default LeagueDetails;
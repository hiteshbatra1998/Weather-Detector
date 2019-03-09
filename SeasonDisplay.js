import React from 'react';

const getSeason = (lat,month)=>{
     if( month>2 && month< 9 ){
        return lat>0 ? 'summer' : 'winter'; 
     }
     else{
        return lat>0 ? 'winter' : 'summer';
     }
};
const SeasonDisplay = (props) =>{
   const season = getSeason(props.lat,new Date().getMonth());
   const text = season === 'winter' ? 'Burr It is chilly' : 'Lets Hit the beach' ;
   const icon =  season === 'winter' ? 'snowflake' : 'sun' ;
    return(
       <div> 
        <h1>{text}</h1><br></br>
        Month : {new Date().getMonth()+1}<br></br>
        Hemisphere : {props.lat>0 ? 'Northern' : 'Southern'}
        </div>
    );
};

export default SeasonDisplay;

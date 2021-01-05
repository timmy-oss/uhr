import React from 'react';



const Stopwatch = ( props ) =>{


const [ ticks, setTicks ] = React.useState(0);

const [ showLevel  , setShowLevel ] = React.useState(1);

const [ watchConfig , setWatchConfig ] = React.useState( { running : false  } );

const isFirstRun = React.useRef( true );

const tickWatch=()=>{
setTicks( ticks + 20 );

};

//Effects

React.useEffect( ()=>{


if ( isFirstRun.current  ){

isFirstRun.current = false;
return;

};


let cid = setTimeout( tickWatch, 10 );

return ()=>{ clearTimeout( cid ) };

}, [ ticks, ] );


const stopWatch=()=>{

isFirstRun.current = true;

setWatchConfig( Object.assign({},watchConfig,{running:false}) );


};


const resetWatch=()=>{


setTicks(0);

isFirstRun.current = true;

setWatchConfig( Object.assign({},watchConfig,{running:false}) );

};

const startWatch = ()=>{

if (watchConfig.running )return;


isFirstRun.current = false;

setWatchConfig( Object.assign({},watchConfig,{running:true}) );

//alert("starting watch...");

tickWatch();

};


//delete self
const deleteSelf = ()=>{


props.remove( props.id );

};

const resolveStamp = ( stamp )=>{


let hours = Math.floor( stamp / ( 60*60*1000) );
let remainMillis1 = stamp % ( 60*60*1000);

let mins =  Math.floor( remainMillis1 / ( 60*1000) );
let remainMillis2 =  remainMillis1 % ( 60*1000);

let secs =   Math.floor( remainMillis2 / 1000 );
let remainMillis3 =  remainMillis2 % 1000;

let centisecs =  Math.floor( remainMillis3 / 10 );



return { centisecs , secs , mins , hours };

};

//****
const humanize = ( timeObj )=>{

let { centisecs , secs , mins , hours } = timeObj;

let timeText = hours + ' : ' + mins + ' : ' + secs + ' : ' + centisecs;



return timeText;


};



const watchText = humanize( resolveStamp( ticks ) );

return (

<div className = 'w3-container w3-center  w3-animate-zoom w3-border w3-border-light w3-padding-32 '>

<div className = 'w3-row-padding'>

<div className = 'w3-col s9'>
<p className = 'w3-xlarge w3-center'> { watchText } </p>
</div>


<div className = 'w3-col s3 w3-display-container'>

<small onClick = { deleteSelf } class = 'w3-large w3-card w3-circle w3-tag w3-display-topright'> x </small>

</div>

</div>





<div className = 'w3-bar w3-block w3-center w3-stretch' >

<button onClick = { startWatch } className = { ' w3-button w3-padding  w3-border w3-round-large w3-bar-item '  + ( watchConfig.running ?'w3-disabled w3-opacity-max' : ' ' ) } > { !watchConfig.running && ticks!= 0 ? 'Continue' : watchConfig.running ? 'Running' : 'Start'  }  </button>


<button onClick = { stopWatch } style = {{ marginLeft: '2rem' }}   className = { ' w3-button w3-padding  w3-border w3-round-large w3-bar-item' + ( !watchConfig.running ?'w3-disabled w3-opacity-max' : ' ' ) } > Stop </button>

<button onClick = { resetWatch }  style = {{ marginLeft: '2rem' }}  className = {'w3-button w3-padding w3-border w3-round-large  w3-bar-item' + ( ticks == 0 ?'w3-disabled w3-opacity-max' : ' ' ) }> Reset </button>
</div>


</div>

);


};





 const StopwatchList = ()=>{



const [ watchListData ,setWatchListData ]  = React.useState( [] );

//remove

const remove = (id)=>{

//alert(id);
setWatchListData( watchListData.filter(  w => w.id != id ) );


};
//



//AddNew
const addNew = ()=>{

let key = Math.random() * Math.random();


let newState = { id :  key  };

setWatchListData( watchListData.concat( newState ) );



};//



return (

<div className = 'w3-container'>

<small style = {{ padding: '2px' }} className = ' w3-white w3-tiny w3-text-black w3-margin w3-border w3-border-white w3-round-xlarge ' > Stopwatch </small>

{ watchListData.map( s=>( <Stopwatch remove = { remove }  {...s} key = {s.id} /> ) ) }


<div className = 'w3-large w3-center w3-container'>


{ watchListData.length == 0 ?  <p className = 'w3-xlarge w3-animate-bottom w3-cursive w3-padding-64 w3-center' > Add  a stopwatch </p> : null  }

<br/>

<i onClick = { addNew } className = 'fas fa-plus  w3-padding-64' > </i>

</div>


</div>

);

};




export default StopwatchList;
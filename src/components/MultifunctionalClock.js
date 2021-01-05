import React from 'react';
import Stopwatches from './Stopwatch';


const Tab = ( props )=>{

let { viewId  , activeId , icon , activeColor  } = props;

let colorClass = 'w3-khaki';
let iconColor = '';

if ( activeId == viewId ){ colorClass = String( 'w3-' + activeColor ); iconColor = 'w3-text-white' }

let iconClasses = ['fas w3-xlarge ' ,iconColor, 'w3-center',  'fa-' + String(icon) ]

return (

<p {...props} style = {{ paddingleft:'3.5rem' , paddingRight:'3.5rem' }} className = {'w3-bar-item w3-center w3-padding-16 ' + colorClass } >  <i className = { iconClasses.join(' ') } ></i>   </p>

);

};


const MultifunctionalClock = ( props )=>{

const [ clockType , setClockType ] = React.useState( props.initialClock || 1  );

const [ activeTab , setActiveTab ] = React.useState( 1 );



const getClock = ()=>{

if (  clockType == 1 )return <h1> Watch </h1>;

if ( clockType == 2 )return <h1> Alarms </h1>;

if ( clockType == 3 ) return <Stopwatches/>;

if ( clockType == 4 ) return <h1> Settings </h1>;


};



const colorActive = 'black';

const btnsData = [

{ icon : 'clock' , viewId : 1 , activeColor : colorActive },

{ icon : 'check-circle' ,  viewId : 2 , activeColor : colorActive   },

{ icon : 'stopwatch' ,  viewId : 3 , activeColor : colorActive  },


{ icon : 'cog' ,  viewId : 4 , activeColor : colorActive },

];

return ( 

<div className = ' w3-center w3-block'>

<div className = 'w3-bar w3-block w3-center '>


{ btnsData.map( e=> ( <Tab  {...e} key = { e.viewId }  onClick = { ()=>{setClockType(e.viewId); setActiveTab(e.viewId) } }  activeId = { activeTab } /> ) ) }

</div>




<div className = 'w3-border w3-container w3-margin  w3-border-white w3-round-large'>


{ getClock() }



</div>
</div>
);

};

export default MultifunctionalClock;
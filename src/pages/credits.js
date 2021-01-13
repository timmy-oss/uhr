import React from 'react';
//import { Link } from 'react-router-dom';


const CreditsPage = ( props )=>(



<div className = 'w3-animate-left'>



<div className = 'w3-large w3-center w3-bar-block'>

<span className = 'w3-margin-bottom w3-block w3-padding-64' style = { {'text-transform' : 'uppercase', 'marginBottom':'100px','fontFamily':'langar'} } > Credits </span>
<br/>
<p className = 'w3-block' style = {{'paddingBottom':'10px' , 'color':'green', 'fontWeight':'bold'}}  > TIMILEYIN PELUMI</p>
<br/>
<a className = 'w3-block' style = {{'paddingBottom':'10px'}} href =  'https://facebook.com/timmypelumy' > Facebook </a>
<br/>
<a className = 'w3-block' style = {{'paddingBottom':'10px'}} href =  'https://twitter.com/timmypelumy' > Twitter </a>
<br/>
<a className = 'w3-block' style = {{'paddingBottom':'10px'}} href = 'https://linkedin.com/in/timmypelumy' > LinkedIn </a>
<br/>
<a className = 'w3-block' style = {{'paddingBottom':'10px'}} href = 'https://github.com/timmypelumy' > Github </a>

<br/>



</div>


</div>


);


export default CreditsPage;
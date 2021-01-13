import React from 'react';
import {  Link ,} from 'react-router-dom';

const StartPage = ( props )=>(


<div className = 'w3-container w3-animate-fading'>


<div className = 'w3-center'>
<h1  style = {{ fontFamily : 'RaleWay' , fontWeight : 'bold' }} className = 'w3-xxxlarge w3-light ' > Uhr </h1>


</div>



<br/>


<div className = 'w3-center'>

<p style = {{ fontWeight : 'bold' }} > A React Powered Stopwatch App </p>
</div>


<br/><br/><br/>


<div className = 'w3-center'>
< i  style = {{  padding : '.1rem' }} className  = ' fas fa-clock  w3-spin w3-jumbo '></i>
</div>


<br/><br/><br/><br/><br/>


<div className = 'w3-container w3-padding-64 w3-block w3-center '>

<Link to = '/home/' style = {{ textDecoration : 'none' }}  >

<p style = {{}} className = 'w3-button  w3-center w3-block w3-large w3-light-blue'> Start </p>

</Link>

</div>


<div className ='w3-center w3-container'>
<Link className = 'w3-small w3-wide' to = '/credits/' > Credits </Link>
</div>

</div>






);



export default StartPage;
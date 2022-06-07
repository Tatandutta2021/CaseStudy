import React from "react"

import "./Sites.css"

function Sites(){
    return(
        <div class="sitediv">
        {/* <div class="textst"> */}
        <div>
        <h1><center> Popular Indian City with  Information</center></h1>
        </div>
        {/* <a href="https://www.tripadvisor.in/Attractions-g297595-Activities-Raipur_Raipur_District_Chhattisgarh.html" target="blank">Click Here For Sites</a>
        </div>
        <div class="imag2">
        <img src={require('./SitesImages/taj.png')}  alt='cap' /><div><center>Lord Buddha</center></div>
        </div>
        <div class="imag2">
        <img src={require('./SitesImages/buddha.png')}  alt='cap' /><div><center>Lord Buddha</center></div>
        </div>
        <div class="imag2">
        <img src={require('./SitesImages/buddha.png')}  alt='cap' /><div><center>Lord Buddha</center></div>
        </div> */}
<div>
    <center>
<div class="card">


<center>
{/* <img src="img12.png" alt="Avatar" /> */}
<div class="container">

<img src={require('./SitesImages/kol2.jpg')}  alt='cap' />
<h4><b>Kolkata</b></h4> 
<p>Kolkata(formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site.</p> 
</div>
</center>

</div> 
</center>

<center>
<div class="card">


<center>
{/* <img src="img12.png" alt="Avatar" /> */}
<div class="container">

<img src={require('./SitesImages/mum3.jpg')}  alt='cap' />
<h4><b>Mumbai</b></h4> 
<p>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.</p> 
</div>
</center>

</div> 
</center>

<center>
<div class="card">


<center>
{/* <img src="img12.png" alt="Avatar" /> */}
<div class="container">

<img src={require('./SitesImages/bang1.jpg')}  alt='cap' />
<h4><b>Bangalore</b></h4> 
<p>Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure. </p> 
</div>
</center>

</div> 
</center>


<center>
<div class="card">


<center>
{/* <img src="img12.png" alt="Avatar" /> */}
<div class="container">

<img src={require('./SitesImages/del3.jpg')}  alt='cap' />
<h4><b>Delhi</b></h4> 
<p>Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.</p> 
</div>
</center>

</div> 
</center>


 {/* <Card class="card">
<div class="container">
<img src={require('./SitesImages/taj.png')}  alt='cap' />
<h4><b>Jane Doe</b></h4> 
<p>Interior Designer</p> 
</div>
</Card>  */}

</div>
</div>
    )
}

export default Sites;
import React from "react";



const Flights = props => (



	<div className="flights__info dtc-ns v-mid">

		{ props.aTime1 && 				


		<div className="pt5 mt5-m ml4-m  pa4-ns ">
		  <div className="overflow-auto">
		    <table className="f4 w-100 mw8 center" cellSpacing="0">
		      <thead>
		        <tr>
		          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Departure</th>
		          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Arrival</th>
		          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Price</th>
		        </tr>
		      </thead>
		      <tbody className="lh-copy">
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">{ props.dTime1 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.aTime1 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.price1 } &euro;</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">{ props.dTime2 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.aTime2 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.price2 } &euro;</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">{ props.dTime3 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.aTime3 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.price3 } &euro;</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">{ props.dTime4 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.aTime4 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.price4 } &euro;</td>
		        </tr>
		        <tr>
		          <td className="pv3 pr3 bb b--black-20">{ props.dTime5 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.aTime5 }</td>
		          <td className="pv3 pr3 bb b--black-20">{ props.price5 } &euro;</td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  </div>
		}

		{ 
	 	props.error &&  
	 		<div className="f3 lh-copy measure i ml3 mt4 mt0-l pl3 mb4 bl bw1 b--gold">	 	
	 			<p>{ props.error }</p> 
    			<p>The name of the city has to be written in English.</p>
    			<p>The name of a city with multiple words has to be written with small caps and dashes: los-angeles or new-york</p>
    			<p>If you type something that the app will not recognize as a city, the app will brake. Then you have to refresh the browser. Sorry for that.</p>  
    		</div>
	 	}
	</div>
);

export default Flights;
import React from "react";


const Form = props => (

<div className="dtc-l v-mid tl-m ">
	<form onSubmit={props.getFlights} action="sign-up_submit" method="get" acceptCharset="utf-8">	
	    <fieldset id="sign_up" className="ba b--transparent pl0 mh0 ml5-m">
			<legend className="ph0 mh0 fw6 clip">
				Sign Up
			</legend>			      
			<div className="mt3">
				<label className="db fw4 lh-copy f6 ">
				    From
				</label>
				<input className="pa2 input-reset ba b--black-40 bg-transparent w-100 measure" type="text" name="cityFrom" placeholder="Type the city you want to leave from..."/>
			</div>
			<div className="mt3">
				<label className="db fw4 lh-copy f6 ">
					To
				</label>
			    <input className="pa2 input-reset ba b--black-40  bg-transparent w-100 measure" type="text" name="cityTo" placeholder="Type the city where you want to go..."/>
			</div>
			<div className="mt3">
			    <label className="db fw4 lh-copy f6">
			    	When
			    </label>
		        <input className="pa1 input-reset ba b--black-40 black-60 bg-transparent w-100 measure" type="date" name="whenRaw" />
			</div>	      
	   	</fieldset>
		<div className="mt3 tr tr-m tl-l mr6-m  ">
		    <input className="b ph3 pv2 input-reset ba b--black-40 bg-black-90 white grow pointer f3" type="submit" value="Search Flights"/>
		</div>
  	</form>
</div>	
);

export default Form;
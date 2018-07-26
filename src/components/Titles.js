import React from "react";

const Titles = props => (

	<div 
		className={"w-100 w-40-l pr3-l title-container "+ (props.blue ? "w-30-forced":"")}  
		style={{ backgroundImage: "url(" + props.photo + ")" }}>		
		<div>						 	
			<h1 className="f1-m tr f-headline-l measure-narrow lh-title mv0">				
				<span className="bg-black-90 lh-copy white pa1 tracked-tight" >
					{	
				 	props.city && 
						<span className="ttc">
							{props.city}!
						</span>
					}
					<span className={ props.blue ? "dn":""}>
						Flight finder
					</span>
				</span>				
			</h1>			
			<h3 className="title-container__subtitle white bg-black-90 tr f3 fw1 georgia i">

				{	
	 			props.city && 
					<span>
						If you change your mind, you can always change your destination...
					</span>
				}
				<span className={ props.blue ? "dn":""}>
					Find out flight options for your dream trip and much more...
				</span>
			</h3>
		</div>
	</div>

	
);

export default Titles;


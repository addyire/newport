import React from 'react';

function Hammer2(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m13.57,9.258l-6.656,6.656c-.781.781-2.047.781-2.828,0h0c-.781-.781-.781-2.047,0-2.828l6.656-6.656" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="m15.831,10.602l1.432-1.432c.316-.316.316-.829,0-1.146l-4.01-4.379-4.931-.343-.286.286,6.65,7.013c.316.316.829.316,1.146,0Z" fill={fill} stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default Hammer2;

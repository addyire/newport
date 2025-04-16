import React from 'react';

function Suitcase(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m7,7v-3c0-.5523.4477-1,1-1h4c.5523,0,1,.4477,1,1v3" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<rect height="9" width="14" fill="none" rx="2.5" ry="2.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x="3" y="7"/>
	</g>
</svg>
	);
};

export default Suitcase;

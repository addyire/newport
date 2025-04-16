import React from 'react';

function Handshake(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.5469" x2="17" y1="13" y2="13"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.8" x2="3" y1="6" y2="6"/>
		<path d="m10.7686,16.3657c-.1992,0-.3984-.0791-.5459-.2354l-1.3799-1.4629c-.2842-.3013-.2705-.7759.0312-1.0601.3008-.2842.7764-.2705,1.0605.0308l1.3799,1.4629c.2842.3013.2705.7759-.0312,1.0601-.1445.1367-.3301.2046-.5146.2046Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m13.0498,15.2251c-.1973,0-.3955-.0776-.542-.2319l-1.5322-1.6045c-.2861-.2998-.2754-.7744.0244-1.0605.2969-.2856.7744-.2764,1.0596.0244l1.5322,1.6045c.2861.2998.2754.7744-.0244,1.0605-.1445.1387-.3311.2075-.5176.2075Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m3,13h1.0462c.2884,0,.5627.1245.7526.3415l2.1837,2.4956c.5993.6849,1.5855.8789,2.3996.4718l4.136-2.068c1.221-.6105,1.4851-2.2378.5198-3.2031l-3.0379-3.0379" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="m11,8l-3.0409,1.5205c-.5727.2864-1.2645.1741-1.7173-.2787h0c-.65-.65-.5608-1.7282.1873-2.2625l4.1923-2.9945c.7956-.5683,1.8854-.4781,2.5767.2133l1.5091,1.5091c.1875.1875.4419.2929.7071.2929h1.5858" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default Handshake;

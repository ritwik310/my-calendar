import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import __isNode__ from '../../../utils/isNode';

const HeaderLogo = (props) => {
	const { setSidebar } = props;

	const toggleSidebar = () => {
		if (!__isNode__) {
			const instState = JSON.parse(window.localStorage.getItem('sidebarVisible'));

			if (instState === null) {
				window.localStorage.setItem('sidebarVisible', false);
				return false;
			} else {
				window.localStorage.setItem('sidebarVisible', !instState);
				return !instState;
			}
		}
	};

	return (
		<div className="Header2-Left-Div-01">
			<div className="Header2-Hamburger-Div-02" onClick={() => setSidebar(toggleSidebar())}>
				<div />
				<div />
				<div />
			</div>
			<Link to="/">
				<h2 className="Theme-gradient-text">
					<ReactSVG
						src="/calendar.svg"
						svgStyle={{
							height: '25px',
							marginTop: '3px',
							marginRight: '10px',
							width: 'auto'
						}}
					/>
					Scheduler
				</h2>
			</Link>
		</div>
	);
};

export default HeaderLogo;

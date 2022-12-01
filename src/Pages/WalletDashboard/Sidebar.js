import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const pathname = window.location.pathname;
	console.log(pathname);
	return (
		<>
			<div className="wallet-sdiebar">
				<div className="heading">
					<h3>My Wallet</h3>
				</div>
				<ul className="wallert-list">
					<li className="menu-items">
						<Link
							to="/wallet-dashboard"
							className={
								pathname == "/wallet-dashboard"
									? "menu-link active"
									: "menu-link"
							}
						>
							Dashboard
						</Link>
					</li>
					<li className="menu-items">
						<Link
							to="/wallet-coin"
							className={
								pathname == "/wallet-coin" ? "menu-link active" : "menu-link"
							}
						>
							My Coin
						</Link>
					</li>
					<li className="menu-items">
						<Link
							to="/wallet-nugs"
							className={
								pathname == "/wallet-nugs" ? "menu-link active" : "menu-link"
							}
						>
							My Nugs
						</Link>
					</li>
					<li className="menu-items">
						<Link
							to="/wallet-payment"
							className={
								pathname == "/wallet-payment" ? "menu-link active" : "menu-link"
							}
						>
							Payment
						</Link>
					</li>
					<li className="menu-items">
						<Link
							to="/wallet-referal"
							className={
								pathname == "/wallet-referal" ? "menu-link active" : "menu-link"
							}
						>
							Referral Earnings
						</Link>
					</li>
				</ul>
				<ul className="bottom-links">
					<li className="menu-items">
						<Link to="#" className="menu-link">
							Create referral link
						</Link>
					</li>
					<li className="menu-items">
						<Link to="#" className="menu-link">
							Become an ambassador
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;

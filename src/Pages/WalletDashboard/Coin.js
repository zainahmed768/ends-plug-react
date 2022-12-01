import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import "../../assets/css/WalletDashboard.css";

const Coin = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			<section className="wallet-dashboard-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<Sidebar />
						</div>
						<div className="col-lg-9">
							<div className="referal-code">
								<div className="container">
									<div className="title">
										<h4>Refer a friend and earn upto 100 coins </h4>
									</div>
								</div>
							</div>
							<div className="total-coins">
								<div className="coins">
									<h2>
										My Coins
										<br /> <span className="total">23K</span>
									</h2>
								</div>
								<div className="button-group">
									<button className="btn peach-color">Buy more coins</button>
									<button className="btn blue-color">Sell your coins</button>
								</div>
							</div>
							<div className="my-transaction">
								<div className="title">
									<h4>My Transaction</h4>
								</div>
								<div className="all-transaction">
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">Bank Deposite</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="minus">-</span> $100
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">
											Earn By Order Number #1489651168511
										</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">
											Earn By Order Number #1489651168511
										</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="minus">-</span> $100
										</p>
									</div>
									<div className="see-more">
										<a href="#">see more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Coin;

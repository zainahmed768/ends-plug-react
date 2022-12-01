import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import "../../assets/css/WalletDashboard.css";

const Dashboard = () => {
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
							<div className="dashboard-topbar">
								<div className="row">
									<div className="col-lg-3 col-md-6">
										<div className="detail-box purple-box">
											<h5 className="sub-title">My Coins</h5>
											<h2 className="count">
												23<span className="symbol">K</span>
											</h2>
											<button className="btn">cash-out</button>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="detail-box peach-box">
											<h5 className="sub-title">My Nugs</h5>
											<h2 className="count">204</h2>
											<button className="btn">cash-out</button>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="detail-box blue-box">
											<h5 className="sub-title">Referral Earnings</h5>
											<h2 className="count">
												<span className="symbol">$</span>100
											</h2>
											<button className="btn">cash-out</button>
										</div>
									</div>
									<div className="col-lg-3 col-md-6">
										<div className="detail-box orange-box">
											<h5 className="sub-title">USD</h5>
											<h2 className="count">
												<span className="symbol">$</span>350
											</h2>
											<button className="btn">cash-out</button>
										</div>
									</div>
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
										<p className="comment">Bank Deposite</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="minus">-</span> $100
										</p>
									</div>
									<div className="transaction-box">
										<p className="comment">Earn By Referral</p>
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
									<div className="transaction-box">
										<p className="comment">Bank Deposite</p>
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

export default Dashboard;

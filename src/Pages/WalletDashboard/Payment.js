import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import "../../assets/css/WalletDashboard.css";
import { BankLogo, CardSim, CardSlash, GiftBox } from "../../constant";
import { ATMCard } from "atm-card-react";

const Payment = () => {
	const [number, setNumber] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [holder, setHolder] = useState("");
	const [cvv, setCvv] = useState("");
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
							<div className="heading">
								<h3>Attached Card</h3>
							</div>
							<div className="row">
								<div className="col-lg-4">
									<div className="saved-card">
										<label className="switch">
											<input type="checkbox" hidden name="CardRadio" />
											<span className="slider"></span>
											<h5 className="status">Active</h5>
										</label>
										<ATMCard
											year={year}
											month={month}
											cvv={cvv}
											number={number}
											holderName={holder}
											bankLogo={
												<h1
													style={{
														fontFamily: "nexa-bold",
														color: "white",
													}}
												>
													Credit card
												</h1>
											}
											lifted
											onChange={(data) => {
												setNumber(data.number);
												setCvv(data.cvv);
												setMonth(data.month);
												setYear(data.year);
												setHolder(data.holder);
											}}
										/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="saved-card">
										<label className="switch">
											<input type="checkbox" hidden name="CardRadio" />
											<span className="slider"></span>
											<h5 className="status">Active</h5>
										</label>
										<ATMCard
											year={year}
											month={month}
											cvv={cvv}
											number={number}
											holderName={holder}
											bankLogo={
												<h1
													style={{
														fontFamily: "nexa-bold",
														color: "white",
													}}
												>
													Credit card
												</h1>
											}
											lifted
											onChange={(data) => {
												setNumber(data.number);
												setCvv(data.cvv);
												setMonth(data.month);
												setYear(data.year);
												setHolder(data.holder);
											}}
										/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="total-balance">
										<div className="balance">
											<h4>Balance</h4>
											<h2>$350.00 </h2>
										</div>
										<div className="button-group">
											<button className="btn peach-btn">Withdraw</button>
											<button type="button" data-bs-toggle="modal" data-bs-target="#Converter" className="btn blue-btn">Deposite money</button>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="button-group">
										<button className="add-new-card">Add new card</button>
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
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
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
										<p className="comment">Earn By Referral</p>
										<p className="date">Apr 06, 2022</p>
										<p className="price">
											<span className="plus">+</span> $25
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

			{/* Currency Converter Start Here */}
			<div class="modal fade" id="Converter" aria-hidden="true" aria-labelledby="ConverterLabel" tabindex="-1">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</button>
						</div>
						<div class="modal-body">
							<div className="currency_converter">
								<div className="title">
									<h3>Converter</h3>
								</div>
								<div className="input-fields">
									<div className="form-group">
										<select className="form-control">
											<option>Select</option>
											<option>Nugs</option>
											<option>Coins</option>
											<option>Diamonds</option>
										</select>
									</div>
									<div className="form-group">
										<input type="text" placeholder="Put value" className="form-control" />
									</div>
									<span className="seprator">=</span>
									<div className="form-group">
										<input type="text" readOnly value="3 Gifts" className="form-control result" />
										<img src={GiftBox} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="button-group">
									<button class="converter-btn" data-bs-dismiss="modal">Convert</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Currency Converter End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Payment;

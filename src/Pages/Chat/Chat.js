import React from "react";
import "../../assets/css/Chat.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { msg1, msg2, msg3, msg4, msg5 } from "../../constant";

const Chat = () => {
	const ChatListing = [
		{
			id: 1,
			name: "Christopher",
			profile: msg1,
			is_active: true,
			active_chat: true,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 2,
			name: "Reese",
			profile: msg2,
			is_active: true,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 3,
			name: "Christopher",
			profile: msg3,
			is_active: false,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 4,
			name: "Laura",
			profile: msg4,
			is_active: true,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 5,
			name: "Maldo",
			profile: msg5,
			is_active: false,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 6,
			name: "Christopher",
			profile: msg1,
			is_active: false,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
		{
			id: 5,
			name: "Reese",
			profile: msg2,
			is_active: true,
			active_chat: false,
			username: "@jorgecutis",
			interest: "Canna interest",
		},
	];
	return (
		<>
			{/* Header */}
			<Header />
			{/* Header */}

			{/* Chat Sec Start Here */}
			<section className="chat_sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 p-0">
							<div className="chat-list">
								{/* <div className="title">
									<h4>Chats</h4>
								</div> */}
								<ul className="all-chats">
									{ChatListing?.map((data, index) => {
										return (
											<li key={index}>
												<div
													className={
														data?.active_chat ? "chat actve-chat" : "chat"
													}
												>
													<figure>
														<img
															src={data?.profile}
															alt=""
															className="img-fluid"
														/>
													</figure>
													<div className="name">
														<h4 className="user_name">{data?.name}</h4>
														<h5>
															{data?.username} <span>{data?.interest}</span>
														</h5>
														{data?.is_active ? (
															<h5 className="online">
																<span className="dot"></span> Online
															</h5>
														) : (
															<h5 className="offline">
																<span className="dot"></span> offline
															</h5>
														)}
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col-lg-8 p-0">
							<div className="the-chats">
								<div className="chat-user">
									<figure>
										<img src={msg1} alt="123" className="img-fluid" />
									</figure>
									<div className="name">
										<h4>Christopher</h4>
										<h5>
											<span className="dot"></span> Online
										</h5>
									</div>
								</div>
								<div className="my-chat">
									<div className="my-chat-inner">
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="recive-message">
											<div className="recieve-from-img">
												<img src={msg1} alt="" />
											</div>
											<div className="messages">
												<div className="message-recieved">
													<div className="that-message">
														<span>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
														</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
												<div className="message-recieved">
													<div className="that-message">
														<span>Duis aute irure dolor in reprehenderit</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="recive-message">
											<div className="recieve-from-img">
												<img src={msg1} alt="" />
											</div>
											<div className="messages">
												<div className="message-recieved">
													<div className="that-message">
														<span>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
														</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
												<div className="message-recieved">
													<div className="that-message">
														<span>Duis aute irure dolor in reprehenderit</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="recive-message">
											<div className="recieve-from-img">
												<img src={msg1} alt="" />
											</div>
											<div className="messages">
												<div className="message-recieved">
													<div className="that-message">
														<span>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
														</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
												<div className="message-recieved">
													<div className="that-message">
														<span>Duis aute irure dolor in reprehenderit</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
										<div className="recive-message">
											<div className="recieve-from-img">
												<img src={msg1} alt="" />
											</div>
											<div className="messages">
												<div className="message-recieved">
													<div className="that-message">
														<span>
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
														</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
												<div className="message-recieved">
													<div className="that-message">
														<span>Duis aute irure dolor in reprehenderit</span>
													</div>
													<div className="recieved-on">
														<span>08:08 am</span>
													</div>
												</div>
											</div>
										</div>
										<div className="send-message">
											<div className="message-body">
												<span>
													Duis aute irure dolor in reprehenderit in voluptate
													velit{" "}
												</span>
											</div>
											<div className="send-on">
												<span>08:07 am</span>
											</div>
										</div>
									</div>
								</div>
								<div className="send-new-message">
									<div className="for-new-message">
										<input
											type="text"
											name=""
											placeholder="Enter your message here"
											id=""
										/>
									</div>
									<div className="for-send-msg-btn">
										<button>Send</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Chat Sec End Here */}

			{/* Footer */}
			<Footer />
			{/* Footer */}
		</>
	);
};

export default Chat;

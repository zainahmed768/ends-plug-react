import React, { useState, useEffect } from "react";
import "../../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { login, WebSiteSettings } from "../../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login_header_logo, logo, password_eye } from "../../constant";

const Login = () => {
	const [show, setshow] = useState(true);
	const handleshowpassword = () => {
		setshow(false);
	};

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState(false);

	const handleRememeberMe = (event) => {
		setChecked(!checked);
	};

	const SignInHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (!email || !password) {
			toast.error("Please Enter All Fields");
			setLoading(false);
			return;
		}
		if (
			!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email,
			)
		) {
			toast.error("Invalid Email");
			setLoading(false);
			return;
		} else {
			localStorage.setItem("rememberMe", checked);
			localStorage.setItem("email", checked ? email : "");
			localStorage.setItem("password", checked ? password : "");

			let data = {
				email: email,
				password: password,
			};
			console.log(data);
			setTimeout(async () => {
				setLoading(false);
				let x = await dispatch(login(data));
				console.log("response login", x);
				if (x) {
					console.log(x);
					window.location.href = "/profile";
					// Navigate("/profile");
				}
			}, 600);
		}
	};

	useEffect(() => {
		const rememberMe = localStorage.getItem("rememberMe") === "true";
		const email = rememberMe ? localStorage.getItem("email") : "";
		const password = rememberMe ? localStorage.getItem("password") : "";
		setEmail(email);
		setPassword(password);
		setChecked(rememberMe);
	}, []);
	return (
		<>
			{/* header logo starts here */}
			<header className="login-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-logo-wrapper">
								<figure>
									<img src={login_header_logo} alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* header logo ends here */}
			{/* login starts here */}
			<section className="login-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="login-card-wrapper">
								<div className="login-heading-wrapper">
									<h3>Log in</h3>
								</div>
								<div className="login-form-wrapper">
									<form action="">
										<div className="form-group">
											<input
												type="text"
												placeholder="Email"
												className="form-control"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-group">
											<input
												type={show ? "password" : "text"}
												placeholder="Password"
												className="form-control"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
											<span onClick={handleshowpassword}>
												<img src={password_eye} alt="" />
											</span>
										</div>
										<div className="form-check">
											<input
												type="checkbox"
												className="form-check-input"
												id="exampleCheck1"
												value={checked}
												onChange={(e) => handleRememeberMe(e)}
											/>
											<label className="form-check-label" for="exampleCheck1">
												Remember me
											</label>
										</div>
										<div className="form-group">
											<button
												className="btn"
												onClick={(e) => SignInHandler(e)}
												disabled={loading}
											>
												Login
											</button>
										</div>
										<div className="forget-pass-text">
											<a href="/CreatePassword">Forgot your password?</a>
										</div>
										<div className="forget-pass-text">
											<a href="/CreateUsername">Forgot your Username?</a>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* login ends here */}
		</>
	);
};

export default Login;

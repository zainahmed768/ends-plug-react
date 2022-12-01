import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about/About";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";
import Stories_View from "../Pages/Stories/Stories_View";
import Welcome from "../Pages/auth/welcome";
import EditProduct from "../Pages/ProductActions/EditProduct";
import InviteLink from "../Pages/InviteLink/InviteLink";
import Login from "../Pages/auth/Login";
import CreatePassword from "../Pages/auth/CreatePassword";
import DigitCode from "../Pages/auth/DigitCode";
import NewPassword from "../Pages/auth/NewPassword";
import CreateAccount from "../Pages/auth/CreateAccount";
import Test from "../Pages/auth/AccountStep/test";
import BecomeMember from "../Pages/auth/AccountStep/BecomeMember";
import ContactUs from "../Pages/contact-us/ContactUs";
import ReportProblem from "../Pages/Report/ReportProblem";
import Support from "../Pages/Report/Support";
import Help from "../Pages/Report/Help";
import UploadProduct from "../Pages/ProductActions/UploadProduct";
import Wallet from "../Pages/Wallet/Wallet";
import Wishlist from "../Pages/Wishlist/Wishlist";
import MyOrder from "../Pages/MyOrder/MyOrder";
import ProfilePost from "../Pages/Profile/ProfilePost";
import ProfileFollowers from "../Pages/Profile/ProfileFollowers";
import ProfileFollowing from "../Pages/Profile/ProfileFollowing";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserFollowers from "../Pages/UserProfile/UserFollowers";
import UserFollowing from "../Pages/UserProfile/UserFollowing";
import EditProfile from "../Pages/UserProfile/EditProfile";
import MyProducts from "../Pages/Products/MyProducts";
import ProductDetail from "../Pages/Products/ProductDetail";
import Home2 from "../Pages/Home/Home2";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import LiveStream from "../Pages/LiveStream/LiveStream";
import GroupStream from "../Pages/LiveStream/GroupStream";
import ProductDetail2 from "../Pages/MarketPlace/ProductDetail2";
import WriteReview from "../Pages/MarketPlace/WriteReview";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import ThankYou from "../Pages/ThankYou/ThankYou";
import Blocklist from "../Pages/BlockList/Blocklist";
import Dashboard from "../Pages/WalletDashboard/Dashboard";
import Coin from "../Pages/WalletDashboard/Coin";
import Nugs from "../Pages/WalletDashboard/Nugs";
import Referal from "../Pages/WalletDashboard/Referal";
import Payment from "../Pages/WalletDashboard/Payment";
import CreateUserName from "../Pages/auth/CreateUserName";
import Chat from "../Pages/Chat/Chat";

const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home2 />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/Story" element={<Stories_View />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/invite-link" element={<InviteLink />} />
				<Route path="/report-problem" element={<ReportProblem />} />
				<Route path="/support" element={<Support />} />
				<Route path="/faqs" element={<Help />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/my-order" element={<MyOrder />} />

				{/* Profile View */}
				<Route path="/profile" element={<ProfilePost />} />
				<Route path="/profile-followers" element={<ProfileFollowers />} />
				<Route path="/profile-following" element={<ProfileFollowing />} />
				<Route path="/blocklist" element={<Blocklist />} />

				{/* User Profile */}
				<Route path="/user-profile" element={<UserProfile />} />
				<Route path="/user-followers" element={<UserFollowers />} />
				<Route path="/user-following" element={<UserFollowing />} />
				<Route path="/edit-profile" element={<EditProfile />} />

				{/* Product */}
				<Route path="/products" element={<MyProducts />} />
				<Route path="/product-detail" element={<ProductDetail />} />
				<Route path="/shopping-cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/thank-you" element={<ThankYou />} />

				{/* Market Place */}
				<Route path="/market-place" element={<MarketPlace />} />
				<Route path="/product-detail2" element={<ProductDetail2 />} />
				<Route path="/write-review" element={<WriteReview />} />

				{/* Live Stream */}
				<Route path="/live-stream" element={<LiveStream />} />
				<Route path="/group-stream" element={<GroupStream />} />

				{/* Product Routes */}
				<Route path="/edit-product" element={<EditProduct />} />
				<Route path="/upload-product" element={<UploadProduct />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/CreatePassword" element={<CreatePassword />} />
				<Route path="/DigitCode" element={<DigitCode />} />
				<Route path="/NewPassword" element={<NewPassword />} />
				<Route path="/CreateAccount" element={<CreateAccount />} />
				<Route path="/CreateUserName" element={<CreateUserName />} />
				<Route path="/BecomeMember" element={<BecomeMember />} />

				{/* Wallet Dashboard */}
				<Route path="/wallet-dashboard" element={<Dashboard />} />
				<Route path="/wallet-coin" element={<Coin />} />
				<Route path="/wallet-nugs" element={<Nugs />} />
				<Route path="/wallet-referal" element={<Referal />} />
				<Route path="/wallet-payment" element={<Payment />} />
				<Route path="/contact-us" element={<ContactUs />} />

				{/* Chat */}
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;

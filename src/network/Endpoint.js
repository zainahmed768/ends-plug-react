// Define api end points here
export const AUTH = "/auth";
export const STORE = "/store";
export const SIGNUP = `${AUTH + STORE}`;
export const USERNAME_AVAILABILITY = "/getUsername";
export const EMAIL_AVAILABILITY = "/getEmail";
export const SIGNIN = "/login";
export const RESEND_EMAIL = "/resendEmail";
export const EMAIL_VERIFIED = "/resendEmail";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password";
export const OTP_VERIFICATION = "/reset-password";

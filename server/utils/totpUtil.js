const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

const encoding = "base32";

const generateQRcode = async (username) => {
  const { base32: secret } = speakeasy.generateSecret();
  const otpauth_url = speakeasy.otpauthURL({
    secret,
    label: username,
    encoding,
    issuer: "AmazeCart",
  });
  const qrCode = await QRCode.toDataURL(otpauth_url);
  return { qrCode, secret };
};

const verifyOTP = (secret, otp) => {
  const isVerified = speakeasy.totp.verify({
    secret,
    encoding,
    token: otp,
  });

  return isVerified;
};

module.exports = { generateQRcode, verifyOTP };

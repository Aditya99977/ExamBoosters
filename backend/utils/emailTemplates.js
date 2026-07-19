const verificationEmailTemplate = (name, verificationLink) => {
    return `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8" />
<title>Verify Your Email</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;">

<tr>
<td
style="background:linear-gradient(135deg,#2563EB,#1D4ED8);padding:40px;text-align:center;">

<h1 style="color:#fff;margin:0;font-size:34px;">
VNAverse
</h1>

<p style="color:#dbeafe;margin-top:10px;">
Vision Nexus Academy
</p>

</td>
</tr>

<tr>

<td style="padding:45px;">

<h2 style="margin-top:0;">
Hello ${name} 👋
</h2>

<p style="color:#555;font-size:16px;line-height:1.8;">
Welcome to <strong>ExamBooster</strong> by <strong>VNAverse</strong>.
Please verify your email address to activate your account.
</p>

<div style="text-align:center;margin:40px 0;">

<a href="${verificationLink}"
style="
display:inline-block;
background:#2563EB;
color:white;
text-decoration:none;
padding:16px 36px;
border-radius:12px;
font-size:17px;
font-weight:bold;
">

Verify Email

</a>

</div>

<p style="color:#666;">
This verification link will expire in
<strong>24 hours</strong>.
</p>

<p style="color:#888;font-size:14px;">
If you didn't create this account,
you can safely ignore this email.
</p>

<hr style="margin:35px 0;border:none;border-top:1px solid #eee;">

<p style="font-size:13px;color:#999;text-align:center;">
© ${new Date().getFullYear()} VNAverse (Vision Nexus Academy)
</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
};

module.exports = {
    verificationEmailTemplate,
};
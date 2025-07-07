const verifyEmailTemplate = ({ name, url }) => {
  const year = new Date().getFullYear();
  return `
      <body style="margin: 0; padding: 0; font-family: 'Inter', sans-serif; background-color: #f4f4f4;">

        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          <header style="background-color: #1e293b; padding: 30px; text-align: center; margin-bottom: 10px; color: white">
            <h2>Quikett🟢</h2>
          </header>

          <main style="padding: 30px 40px; color: #0f172a;">
            <h2 style="margin-top: 0; padding-left: 10px;  margin-bottom: 20px;">Verify Your Email</h2>
            <p style="margin: 0 0 15px; color: #475569; padding-left: 10px;">Hi <strong>${name}</strong>,</p>
            <p style="margin: 0 0 25px; color: #475569; padding-left: 10px;">
              Thank you for signing up with <strong>Quikett</strong>! Please confirm your email address by clicking the button below.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href=${url} target="_blank" style="background-color: #10b981; color: white; text-decoration: none; padding: 14px 28px; border-radius: 6px; display: inline-block; font-size: 16px;">
                Verify Email
              </a>
            </div>

            <p style="font-size: 14px; color: #64748b; padding-left: 10px;">
              If you didn’t request this, you can safely ignore this email.
            </p>
          </main>

          <!-- Footer -->
          <footer style="background-color: #f8fafc; padding: 20px 40px; text-align: center; font-size: 12px; color: #94a3b8;">
            &copy; ${year} Quikett. All rights reserved.
          </footer>

        </div>

      </body>
`;
};

export default verifyEmailTemplate;

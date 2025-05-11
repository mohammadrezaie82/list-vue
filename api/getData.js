// api/getData.js
export default async function handler(req, res) {
  const data = { message: "Hello from Serverless Function in Vercel!" };
  res.status(200).json(data); // بازگشت داده‌ها به صورت JSON
}

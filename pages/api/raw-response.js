// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ value: Math.floor(Math.random() * 65536).toString(10) });
}

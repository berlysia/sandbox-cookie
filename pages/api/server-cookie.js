import { parseCookies, setCookie } from "nookies";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const parsedCookies = parseCookies({ req });
  console.log({ parsedCookies });

  // Notice how the response object is passed
  setCookie(
    { res },
    "fromServer",
    `${Math.floor(Math.random() * 65536).toString(10)}`,
    {
      maxAge: 30 * 24 * 60 * 60,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    }
  );

  // destroyCookie({ res }, 'fromServer');
  res.status(200).json({ name: "John Doe" });
}

import { setCookie } from "nookies";
import { useCallback } from "react";

function FetchButton({ href, callback, children }) {
  const handleClick = useCallback(() => {
    fetch(href, { credentials: "include" })
      .then((res) => res.json())
      .then(callback);
  }, [callback, href]);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default function Home() {
  const handleClick = useCallback(
    (data) =>
      setCookie(null, "storeInFrontend", data.value, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      }),
    []
  );
  return (
    <div>
      <FetchButton href="/api/raw-response" callback={handleClick}>
        raw
      </FetchButton>
      <FetchButton href="/api/server-cookie" callback={() => {}}>
        server
      </FetchButton>
      check Cookie values
    </div>
  );
}

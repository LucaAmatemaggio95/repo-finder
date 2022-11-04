import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import LoginCard from "../components/Login/LoginCard";

export default function Home() {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    router.push("/finder");
  }

  return (
    <>
      {!session && (
        <>
          <LoginCard />
        </>
      )}
    </>
  );
}

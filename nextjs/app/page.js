import React from "react";
import Link from "next/link";
import { Inter, Roboto } from "next/font/google";
import { cookies } from "next/headers";
import Trial from "./trial";
import { redirect } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const fetchData1 = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
const fetchData2 = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

const Page = async () => {
  const newCookies = cookies();
  console.log(newCookies.get("c1"));
  const nav1 = false;

  const data1 = fetchData1();
  const data2 = fetchData2();

  const datas = await Promise.all([data1, data2]);
  console.log(datas);

  if (nav1) {
    redirect("/about");
  }

  return (
    <>
      <div>Page</div>
      <Link className={inter.className} href="/about">
        Yönlendirme1
      </Link>
      <Link className={roboto.className} href="/about?name=numan">
        Yönlendirme2
      </Link>
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "numan",
            surname: "senlik",
          },
        }}
      >
        Yönlendirme3
      </Link>
      <Trial />
    </>
  );
};

export default Page;

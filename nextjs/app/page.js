import React from "react";
import Link from "next/link";
import { Inter, Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import Trial from "./trial";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const newCookies = cookies();
  console.log(newCookies.get("c1"));
  return (
    <>
      <div >
        Page
      </div>
      <Link className={inter.className} href="/about">Yönlendirme1</Link>
      <Link className={roboto.className} href="/about?name=numan">Yönlendirme2</Link>
      <Link href={{
      pathname:"/about",
      query : {
      name:"numan",
      surname: "senlik"
      }
      }}>Yönlendirme3</Link>
      <Trial/>
    </>
  )
}

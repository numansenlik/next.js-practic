import Link from "next/link";

export default function Page() {
  return (
    <>
      <div >
        Page
      </div>
      <Link href="/about">Yönlendirme1</Link>
      <Link href="/about?name=numan">Yönlendirme2</Link>
      <Link href={{
      pathname:"/about",
      query : {
      name:"numan",
      surname: "senlik"
      }
      }}>Yönlendirme3</Link>
    </>
  )
}

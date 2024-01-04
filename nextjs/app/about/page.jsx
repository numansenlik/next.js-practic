import Image from "next/image"
import Link from "next/link"

function Page() {
    return (
        <div>About
            <Link href={"/"}> AnaSayfa</Link>
            <Image
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="Picture of the author"
                width={300}
                height={300}
            />
        </div>
    )
}
export default Page
import { ImGithub, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <Link href="https://jmyounghoyos.com/">
                        <a className="uppercase text-1xl">Back to main page</a>
                    </Link>
                </div>
                <div className="shrink w-180 sm:order-2">
                    <Link href={"/"}>
                        <a className="font-bold uppercase text-3xl">Juan Manuel Young Hoyos</a>
                    </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href={"/"}><a><ImGithub color="#888888" /></a></Link>
                        <Link href={"/"}><a><ImTwitter color="#888888" /></a></Link>
                        <Link href={"/"}><a><ImYoutube color="#888888" /></a></Link>
                    </div>
                </div>
            </div>
        </header >
    )
}

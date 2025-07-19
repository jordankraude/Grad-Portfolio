import Link from "next/link"

export default function Header() {
    return (
    <header className="w-full p-5 flex justify-between items-center bg-black shadow-md text-[#B5D99C]">
        <Link href="/"><h1 className="text-xl font-bold">
            <img className="h-20 w-20" src="/JKS Logo.png" alt="" /></h1>
        </Link>


    <nav>
        <Link href="/" className="mx-2 hover:text-white">Overview</Link>
        <Link href="/About" className="mx-2 hover:text-white">About</Link>
        <Link href="/Projects" className="mx-2 hover:text-white">Projects</Link>
        <Link href="/Contact" className="mx-2 hover:text-white">Contact</Link>
    </nav>
    </header>
    )
}
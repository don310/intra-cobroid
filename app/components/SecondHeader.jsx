// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ModeToggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 px-6 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/pic/logo.png"
            alt="IntraCobroid Logo"
            width={60}
            height={60}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      <nav className="ml-auto flex space-x-6">
        {["home", "categories", "blog", "notes", "tutorial", "contact"].map(
          (item) => (
            <Link
              href={`/${item}`}
              key={item}
              className="text-lg text-gray-700 hover:text-blue-500 capitalize"
            >
              {item}
            </Link>
          )
        )}
      </nav>

      <form onSubmit={handleSearch} className="ml-4 flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tutorials..."
          className="border rounded-lg px-3 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button type="submit" className="text-blue-500 hover:text-blue-700">🔍</button>
      </form>

      <div className="flex items-center ml-4 space-x-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
}

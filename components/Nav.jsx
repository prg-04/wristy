import { navLinks } from "@/constants"
import Image from "next/image"

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-30 w-full bg-[#0A1929]">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Nikey-logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex flex-1 gap-16 max-lg items-center justify-center max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-[#B0C4DE]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/assets/images/hamburger.svg"
            alt="hambburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav
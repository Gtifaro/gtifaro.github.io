import Image from "next/image";
import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <>
      <div>
        <div className="bg-black w-[3%] h-full fixed shadow-navbar place-items-center grid">
          <div className="w-full absolute top-0">
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer"
                width={"1"}
                height={"1"}
              />
            </Link>
          </div>
          <div className="h-fit  ">
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer "
                width={"1"}
                height={"1"}
              />
            </Link>
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer "
                width={"1"}
                height={"1"}
              />
            </Link>
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer "
                width={"1"}
                height={"1"}
              />
            </Link>
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer "
                width={"1"}
                height={"1"}
              />
            </Link>
          </div>
          <div className="w-full absolute bottom-0">
            <Link href="/">
              <Image
                alt="Gabrial Antonio Rodríguez Tífaro - Gtifaro logo"
                src="/G.svg"
                className="w-full select-none cursor-pointer"
                width={"1"}
                height={"1"}
              />
            </Link>
          </div>
        </div>
        <div className="w-full h-full bg-black">{children}</div>
      </div>
    </>
  );
}

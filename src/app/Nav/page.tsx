import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="text-center  p-10 z-10 relative  drop-shadow-md  text-white underline-offset-auto hover:after:w-full hover:after:left-0 after:absolute after:bg-black h-0bg-[#697d73] z-2">
        <Link
          className="p-3 relative after:bg-[#3e4540] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-500 cursor-pointer"
          href="/"
        >
          Home
        </Link>
        <Link
          className="p-3 relative after:bg-[#3e4540] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-500 cursor-pointer"
          href="./Character"
        >
          Character
        </Link>
        <Link
          className="p-3 relative after:bg-[#3e4540]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-500 cursor-pointer"
          href="./Watch"
        >
          Watch
        </Link>
        <Link
          className="p-3 relative after:bg-[#3e4540] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-500 cursor-pointer"
          href="./FAQ"
        >
          FAQ
        </Link>
        <Link
          className="p-3 relative after:bg-[#3e4540] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full  after:transition-all after:duration-500 cursor-pointer"
          href=""
        >
          MANGA
        </Link>
      </div>
    </>
  );
}

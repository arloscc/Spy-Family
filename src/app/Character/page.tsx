import Image from "next/image";
import Nav from "../Nav/page";
import Link from "next/link";

export default function Character() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="bg-black ">
          <div className="-mx-8 w-50">
            <Nav />
          </div>
        </div>

        <div className="p-24  ">
          <h1 className="py-4 font-bold text-4xl text-center">
            Best on Characters
          </h1>
        </div>

<div className="md:w-full -mx-16 md:mx-0">
        <div className="p-8 flex justify-between m ">
          <div className=" justify-between p-4">
            <Link href="https://spy-x-family.fandom.com/wiki/Loid_Forger">
            <Image
              className="rounded-lg w-96 transition scale  "
              src="/loid.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            </Link>
            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Loid Forger
            </h1>
          </div>

          <div className="justify-between p-4">
            <Link href="https://spy-x-family.fandom.com/wiki/Yor_Forger">
            <Image
              className="rounded-lg w-96 scale "
              src="/yor.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            </Link>
            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Yor Briar
            </h1>
          </div>

          <div className="justify-between p-4">
            <Link href="https://spy-x-family.fandom.com/wiki/Anya_Forger">
            <Image
              className="rounded-lg w-96 scale"
              src="/anya.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            </Link>
            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Anya Forger
            </h1>
          </div>
        </div>

        <div className="p-8 flex justify-between">
          <div className=" justify-between">
            <Link href="https://spy-x-family.fandom.com/wiki/Becky_Blackbell">
              
            <Image
              className="rounded-lg w-96 scale "
              src="/Becky.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
              />
              </Link>

            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Becky Blackbell
            </h1>
          </div>

          <div className="  justify-between">
          <Link href="https://spy-x-family.fandom.com/wiki/Damian_Desmond">
            <Image
              className="rounded-lg w-96 scale "
              src="/damian.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
               </Link>
            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Daminan Desmond
            </h1>
          </div>

          <div className=" justify-between">
          <Link href="https://spy-x-family.fandom.com/wiki/Fiona_Frost">
            <Image
              className="rounded-lg w-96 scale "
              src="/fiona.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
                   </Link>
            <h1 className="justify-center flex p-12 font-semibold  text-black">
              Fiona Forst
            </h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

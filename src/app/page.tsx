import Nav from "./Nav/page";
import Hero from "./Hero/page";
import PlayHome from "./main/page";
import dynamic from "next/dynamic";


const NoSSR = dynamic(() => import("./main/page"), { ssr: false });
const NoSR = dynamic(() => import("./source/page"), { ssr: false });

export default function Page() {
  return (
    <>
      <Hero />
      <NoSSR />
    </>
  );
}

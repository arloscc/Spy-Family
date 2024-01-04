import dynamic from "next/dynamic";

const NoSR = dynamic(() => import("../source/page"), { ssr: false });

export default function Watch() {
  return (
    <>
    <div className="overflow-hidden">

      <NoSR />
    </div>
    </>
  );
}

import Image from "next/image";
// import PdfSee from "./components/pdfSee";
import dynamic from 'next/dynamic'
const PdfSee = dynamic(() => import("./components/pdfSee"), { ssr: false });

export default function Home() {
  return (
    <main className=" bg-blue-800">
      <p>This is a blank template</p>
      <PdfSee/>
    </main>
  );
}

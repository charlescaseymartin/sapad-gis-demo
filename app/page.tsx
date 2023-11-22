import dynamic from "next/dynamic";
import SelectInput from "@/components/selectInput";

const LeafletMap = dynamic(async () => await import("../components/leafletMap"), { ssr:false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SelectInput />
      <LeafletMap />
    </main>
  )
}

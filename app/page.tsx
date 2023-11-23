import GISDisplay from "@/components/gisDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-1/2 my-5">
        <h1 className="text-center text-4xl">SAPAD &ndash; South Africa Protected Areas Database GIS Spatial Data Visualization</h1>
        <p className="mt-4">
          Welcome to my demo of real-world spatial application that showcases South Africans Protected & Conservation Areas.
          <br/>
          By selecting an option from the dropdown, you&apos;ll see an live update of SAPAD&apos;s second quarter data of South Africans
          Protected area boundaries, Environmental protection, Biodiversity, Protected areas and Conservation Estates.
        </p>
      </div>
      <GISDisplay />
    </main>
  )
}

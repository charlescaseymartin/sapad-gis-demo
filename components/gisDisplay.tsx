"use client";

import dynamic from "next/dynamic";
import SelectInput from "@/components/selectInput";
import { formatGeoJSONData } from "@/utils";
import SapadRawData from "@/data/sapad-data.json";
import { useState } from "react";

const LeafletMap = dynamic(async () => await import("../components/leafletMap"), { ssr: false })

export default function GISDisplay() {
  const formatedData = formatGeoJSONData(SapadRawData);
  const [selectedOption, setSelectedOption] = useState<any>(formatedData[0]);

  const onSelectOption = (id: string) => {
    if (selectedOption.id === id) return;
    const newOption = formatedData.find((feature: any) => feature.id === id)
    if (newOption) setSelectedOption(newOption);
  }

  return (
    <>
      <SelectInput selectedOption={selectedOption} onSelectItem={onSelectOption} options={formatedData} />
      <LeafletMap feature={selectedOption} />
    </>
  )
}
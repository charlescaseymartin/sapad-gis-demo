
export function formatGeoJSONData(data: any) {
  const features = data.features.map((feature: any) => {
    const wdpaIdentifier = "<td>WDPAID</td>\n\n";
    const wdpaID = feature.properties.description.split(wdpaIdentifier)[1].split("</td>\n\n")[0].replace("<td>", "WDPAID_");

    return {
      ...feature,
      id: wdpaID,
    }
  });
  return features;
}
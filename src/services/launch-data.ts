import launches from "@launches";
export function LaunchData(flight: number) {
  return launches.filter((launch) => launch.flight_number === flight);
}

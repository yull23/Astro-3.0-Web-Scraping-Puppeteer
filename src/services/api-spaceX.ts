import type { Launch } from "../types/spaceX.types";

export async function getLaunchesSpaceX() {
  const response = await fetch(import.meta.env.PUBLIC_API_URL_SPACEX);
  const launches = (await response.json()) as Launch[];
  return launches;
}

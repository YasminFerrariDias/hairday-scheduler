import { apiConfig } from "./api-config.js";

export async function getSchedules() {
  const response = await fetch(`${apiConfig.baseURL}/latest`, {
    headers: apiConfig.headers,
  });

  const data = await response.json();

  return data.record.schedules;
}

export async function saveSchedules(schedules) {
  await fetch(apiConfig.baseURL, {
    method: "PUT",
    headers: apiConfig.headers,
    body: JSON.stringify({ schedules }),
  });
}
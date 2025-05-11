"use server";

import { ApiRoute } from "@/api/api";
import logger from "@/libs/logger/logger";

export async function fetchAllFlights() {
  try {
    const response = await fetch(ApiRoute);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    logger.error("Fetch error:", error);
    throw error;
  }
}

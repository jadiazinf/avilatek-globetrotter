"use server";

export async function bookFlightAction() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

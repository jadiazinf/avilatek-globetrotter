import { z } from "zod";

export const dateSchema = z.date({ message: "Invalid date format" });

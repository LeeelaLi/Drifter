import type { FileRouter } from "uploadthing/next";

export const config = {
  uploadthingId: process.env.UPLOADTHING_APP_ID,
  uploadthingSecret: process.env.UPLOADTHING_TOKEN,
};
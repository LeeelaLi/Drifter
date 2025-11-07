// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other config items...
  reactCompiler: true,
  // Transpile all related UploadThing packages
  transpilePackages: [
    "uploadthing", 
    "@uploadthing/react", 
    "@uploadthing/shared", 
    "@uploadthing/mime-types" // The package causing the README.md error
  ],
};

export default nextConfig;
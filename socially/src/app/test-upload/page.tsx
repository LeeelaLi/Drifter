"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";

export default function TestUploadPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Test Upload Button</h1>
        <UploadButton
          endpoint="postImage"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed! URL: " + res?.[0]?.url);
          }}
          onUploadError={(error: Error) => {
            console.error("Error:", error);
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Test Upload Dropzone</h2>
        <UploadDropzone
          endpoint="postImage"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed! URL: " + res?.[0]?.url);
          }}
          onUploadError={(error: Error) => {
            console.error("Error:", error);
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </div>
  );
}
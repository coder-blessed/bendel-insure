"use client";

import { useState } from "react";
import { Check, Copy, Photo, Plus } from "@/components/icons";
import { apiRequest } from "@/lib/api";

type MediaUploaderProps = {
  onUploaded?: (url: string) => void;
  folder?: string;
  label?: string;
};

export function MediaUploader({
  onUploaded,
  folder = "bendel-insurance/blog",
  label = "Upload Image to Cloudinary",
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;
      try {
        let uploadedUrlResult: string | null = null;

        // 1. Try Next.js direct upload API
        try {
          const directRes = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ file: base64, folder }),
          });
          const payload = await directRes.json().catch(() => null);
          if (directRes.ok && (payload?.url || payload?.data?.url)) {
            uploadedUrlResult = payload.url || payload.data.url;
          }
        } catch {
          // Fall back to external backend
        }

        // 2. Fall back to backend apiRequest if direct route didn't handle it
        if (!uploadedUrlResult) {
          const res = await apiRequest<{ url: string }>("/admin/upload", {
            method: "POST",
            body: JSON.stringify({ file: base64, folder }),
          });
          if (res?.url) {
            uploadedUrlResult = res.url;
          }
        }

        if (uploadedUrlResult) {
          setUploadedUrl(uploadedUrlResult);
          if (onUploaded) onUploaded(uploadedUrlResult);
        } else {
          throw new Error("Could not retrieve uploaded image URL.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed.");
      } finally {
        setUploading(false);
      }
    };
    reader.onerror = () => {
      setError("Failed to read local file.");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  }

  const copyUrl = () => {
    if (!uploadedUrl) return;
    navigator.clipboard.writeText(uploadedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50/50 p-4 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Photo className="h-7 w-7 text-steel" />
        <div>
          <span className="font-medium text-xs text-ink block">{label}</span>
          <span className="text-[10px] text-steel">PNG, JPG, WEBP up to 10MB</span>
        </div>

        <label className="eyebrow mt-1 inline-flex cursor-pointer items-center gap-1.5 rounded-pill bg-white px-3.5 py-1.5 text-[9px] font-semibold text-ink shadow-sm border border-gray-200 hover:bg-gray-50">
          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            onChange={handleFileChange}
            className="sr-only"
          />
          <Plus className="h-3 w-3" />
          {uploading ? "Uploading to Cloudinary…" : "Choose File"}
        </label>
      </div>

      {error && <p className="mt-2 text-xs text-rose-600 font-medium">{error}</p>}

      {uploadedUrl && (
        <div className="mt-3 flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-left">
          <div className="flex items-center gap-2.5 min-w-0">
            <img src={uploadedUrl} alt="Uploaded" className="h-7 w-7 rounded object-cover border border-emerald-300" />
            <span className="text-xs text-emerald-900 truncate font-mono">{uploadedUrl}</span>
          </div>
          <button
            type="button"
            onClick={copyUrl}
            className="eyebrow ml-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-[9px] text-emerald-800 shadow-sm border border-emerald-300 hover:bg-emerald-100 shrink-0"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied ? "Copied" : "Copy URL"}
          </button>
        </div>
      )}
    </div>
  );
}

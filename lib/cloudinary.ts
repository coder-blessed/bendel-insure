import { v2 as cloudinary } from "cloudinary";

/**
 * Cloudinary configuration for pure post and media persistence.
 */
export function getCloudinaryConfig() {
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME ||
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||
    "fjscdyel";

  const apiKey = process.env.CLOUDINARY_API_KEY || "759899154418572";
  const apiSecret =
    process.env.CLOUDINARY_API_SECRET || "7ulIktiMGxwRIXTWvvVLRczX3q8";
  const folder = process.env.CLOUDINARY_FOLDER || "bendel-insurance";

  return { cloudName, apiKey, apiSecret, folder };
}

// Initialize Cloudinary SDK
const config = getCloudinaryConfig();
cloudinary.config({
  cloud_name: config.cloudName,
  api_key: config.apiKey,
  api_secret: config.apiSecret,
  secure: true,
});

export { cloudinary };

/**
 * Uploads a JSON payload as a raw asset in Cloudinary.
 */
export async function uploadJsonToCloudinary(
  publicId: string,
  data: unknown,
): Promise<string> {
  const jsonString = JSON.stringify(data, null, 2);
  const base64Data = Buffer.from(jsonString).toString("base64");
  const dataUri = `data:application/json;base64,${base64Data}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    resource_type: "raw",
    public_id: publicId,
    overwrite: true,
    invalidate: true,
  });

  return result.secure_url;
}

/**
 * Fetches a raw JSON asset from Cloudinary.
 * Prioritizes versioned secure_url from Cloudinary Admin API to guarantee 100% fresh data.
 */
export async function fetchJsonFromCloudinary<T>(
  publicId: string,
): Promise<T | null> {
  const { cloudName } = getCloudinaryConfig();

  // 1. Try fetching with versioned secure_url from API
  try {
    const resource = await cloudinary.api.resource(publicId, {
      resource_type: "raw",
    });

    if (resource?.secure_url) {
      const response = await fetch(
        `${resource.secure_url}?t=${Date.now()}`,
        { cache: "no-store" },
      );
      if (response.ok) {
        return (await response.json()) as T;
      }
    }
  } catch (apiError: any) {
    // If resource not found (404), return null
    if (apiError?.error?.http_code === 404 || apiError?.http_code === 404) {
      return null;
    }
  }

  // 2. Fallback to direct raw URL
  try {
    const unversionedUrl = `https://res.cloudinary.com/${cloudName}/raw/upload/${publicId}?t=${Date.now()}`;
    const response = await fetch(unversionedUrl, { cache: "no-store" });
    if (response.ok) {
      return (await response.json()) as T;
    }
    if (response.status === 404) {
      return null;
    }
  } catch (fetchError) {
    console.warn(`Direct fetch failed for ${publicId}:`, fetchError);
  }

  return null;
}

/**
 * Deletes a raw asset from Cloudinary.
 */
export async function deleteRawFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
      invalidate: true,
    });
  } catch (error) {
    console.error(`deleteRawFromCloudinary(${publicId}) error:`, error);
  }
}

/**
 * Uploads media (images) to Cloudinary.
 */
export async function uploadMediaToCloudinary(
  file: string,
  targetFolder?: string,
) {
  const { folder: defaultFolder } = getCloudinaryConfig();
  const result = await cloudinary.uploader.upload(file, {
    folder: targetFolder || `${defaultFolder}/blog`,
    resource_type: "auto",
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    format: result.format,
    width: result.width,
    height: result.height,
  };
}

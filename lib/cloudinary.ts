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
 * Uses cache-busting timestamp to always get the latest persisted version.
 */
export async function fetchJsonFromCloudinary<T>(
  publicId: string,
): Promise<T | null> {
  const { cloudName } = getCloudinaryConfig();
  // Cloudinary raw URL path format
  const url = `https://res.cloudinary.com/${cloudName}/raw/upload/${publicId}?t=${Date.now()}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Cloudinary returned HTTP ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    // If direct HTTP fetch failed or 404, check via Admin API as fallback
    try {
      const resource = await cloudinary.api.resource(publicId, {
        resource_type: "raw",
      });
      if (resource?.secure_url) {
        const fallbackRes = await fetch(`${resource.secure_url}?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (fallbackRes.ok) {
          return (await fallbackRes.json()) as T;
        }
      }
    } catch {
      // Ignored
    }

    console.warn(`fetchJsonFromCloudinary(${publicId}) error:`, error);
    return null;
  }
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

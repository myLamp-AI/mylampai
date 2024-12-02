"use server";
import {
  StorageSharedKeyCredential,
  generateBlobSASQueryParameters,
  BlobSASPermissions,
  BlobServiceClient,
} from "@azure/storage-blob";

const accountName = process.env.AZURE_ACCOUNT_NAME || "";
const accountKey = process.env.AZURE_ACCOUNT_KEY || "";
const containerName = process.env.AZURE_CONTAINER_NAME || "";
const interviewContainerName = process.env.AZURE_INTERVIEW_CONTAINER_NAME || "";
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING||"";

const sharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey,
);

// SAS Token Generator Function
export const generateSasToken = async (blobName: string) => {
  const sasOptions = {
    containerName,
    blobName,
    permissions: BlobSASPermissions.parse("c"),
    startsOn: new Date(new Date().valueOf() - 1 * 60 * 1000),
    expiresOn: new Date(new Date().valueOf() + 4 * 60 * 1000),
  };

  try {
    const sasToken = generateBlobSASQueryParameters(
      sasOptions,
      sharedKeyCredential,
    ).toString();
    return `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}?${sasToken}`;
  } catch (error) {
    console.error("Error generating SAS token:", error);
    return "";
  }
};

export const generateSasUrlForInterview = async () => {
  const sasOptions = {
    containerName: interviewContainerName,
    permissions: BlobSASPermissions.parse("cw"),
    startsOn: new Date(Date.now() - 5 * 60 * 1000),
    expiresOn: new Date(Date.now() + 40 * 60 * 1000),
  };

  try {
    const sasToken = generateBlobSASQueryParameters(
      sasOptions,
      sharedKeyCredential,
    ).toString();
    console.log(sasToken);
    return {
      sasUrl: `https://${accountName}.blob.core.windows.net/${interviewContainerName}?${sasToken}`,
      sasToken,
    };
  } catch (error) {
    console.error("Error generating SAS token:", error);
    return null;
  }
};
export const blobstorage = async (data: Buffer, fileName: string) => {
  try {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = `${Date.now()}-${fileName}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const uploadBlobResponse = await blockBlobClient.uploadData(data, {
      blobHTTPHeaders: { blobContentType: "application/octet-stream" },
    });

    return {
      blobUrl: blockBlobClient.url,
      uploadBlobResponse,
    };
  } catch (error) {
    console.error("Error uploading blob:", error);
    throw error;
  }
};


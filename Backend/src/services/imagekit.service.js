const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGE_PUBLIC_KEY,
    privateKey: process.env.IMAGE_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_URL_ENDPOINT,
});

async function uploadFile(file) {
    try {
        const result = await imagekit.files.upload({
            file: file.buffer.toString("base64"),
            fileName: `${Date.now()}-${file.originalname}`,
            folder: "/Post-App"
        });

        return result;
    } catch (error) {
        console.error("ImageKit Upload Error:", error);
        throw error;
    }
}

module.exports = uploadFile;
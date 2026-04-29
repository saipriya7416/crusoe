import { Jimp, rgbaToInt, intToRGBA } from "jimp";
import fs from "fs";

async function makeSvg() {
    try {
        const imagePath = "C:\\Users\\sailo\\.gemini\\antigravity\\brain\\5d7d979a-9a2b-4b0b-9334-47aad1184e0e\\media__1777434943986.png";
        
        // Read image
        const image = await Jimp.read(imagePath);
        
        // Define what is "white"
        const isWhite = (r, g, b) => r > 240 && g > 240 && b > 240;
        
        let minX = image.bitmap.width;
        let minY = image.bitmap.height;
        let maxX = 0;
        let maxY = 0;

        // Iterate through all pixels to find bounding box and make white transparent
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            if (isWhite(r, g, b)) {
                // Make transparent
                this.bitmap.data[idx + 3] = 0;
            } else if (a > 0) {
                // Update bounding box if not transparent
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        });

        // Add small padding to bounding box
        const pad = 2;
        minX = Math.max(0, minX - pad);
        minY = Math.max(0, minY - pad);
        maxX = Math.min(image.bitmap.width - 1, maxX + pad);
        maxY = Math.min(image.bitmap.height - 1, maxY + pad);

        const newWidth = maxX - minX + 1;
        const newHeight = maxY - minY + 1;

        // Crop the image
        image.crop({ x: minX, y: minY, w: newWidth, h: newHeight });

        // Get base64 representation
        const base64 = await image.getBase64("image/png");

        // Generate SVG string
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${newWidth} ${newHeight}">
  <image href="${base64}" width="${newWidth}" height="${newHeight}" />
</svg>`;

        fs.writeFileSync("c:\\crusoe\\src\\assets\\crusoe-logo.svg", svgString, "utf8");
        console.log("Successfully created crusoe-logo.svg");
    } catch (err) {
        console.error("Error creating SVG:", err);
    }
}

makeSvg();

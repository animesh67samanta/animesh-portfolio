import sharp from "sharp";
import fs from "fs";
import path from "path";

async function optimizeImages() {
  console.log("Starting image optimization...");

  // 1. Optimize avatar
  const avatarPath = "public/images/avatar.png";
  if (fs.existsSync(avatarPath)) {
    const orig = fs.statSync(avatarPath).size;
    const buf = await sharp(avatarPath)
      .resize(400, 400, { fit: "cover" })
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    fs.writeFileSync(avatarPath, buf);
    console.log(`avatar.png: ${(orig/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
  }

  // 2. Optimize hero-3d-bg.png
  const heroBgPath = "public/images/hero-3d-bg.png";
  if (fs.existsSync(heroBgPath)) {
    const orig = fs.statSync(heroBgPath).size;
    const buf = await sharp(heroBgPath)
      .png({ compressionLevel: 9, effort: 10, palette: true })
      .toBuffer();
    fs.writeFileSync(heroBgPath, buf);
    console.log(`hero-3d-bg.png: ${(orig/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
  }

  // 3. Optimize earth textures
  const earthDir = "public/images/earth";
  if (fs.existsSync(earthDir)) {
    const earthFiles = fs.readdirSync(earthDir);
    for (const f of earthFiles) {
      const fullPath = path.join(earthDir, f);
      if (f.endsWith(".jpg") || f.endsWith(".jpeg")) {
        const orig = fs.statSync(fullPath).size;
        const buf = await sharp(fullPath)
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();
        fs.writeFileSync(fullPath, buf);
        console.log(`${f}: ${(orig/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
      } else if (f.endsWith(".png")) {
        const orig = fs.statSync(fullPath).size;
        const buf = await sharp(fullPath)
          .png({ compressionLevel: 9, effort: 10 })
          .toBuffer();
        fs.writeFileSync(fullPath, buf);
        console.log(`${f}: ${(orig/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
      }
    }
  }

  // 4. Optimize large project images (> 300KB)
  const projDir = "public/images/projects";
  if (fs.existsSync(projDir)) {
    const projFiles = fs.readdirSync(projDir);
    for (const f of projFiles) {
      const fullPath = path.join(projDir, f);
      if (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg")) {
        const orig = fs.statSync(fullPath).size;
        if (orig > 300 * 1024) {
          const meta = await sharp(fullPath).metadata();
          let pipeline = sharp(fullPath);
          if (meta.width && meta.width > 1600) {
            pipeline = pipeline.resize(1600, null, { withoutEnlargement: true });
          }
          if (f.endsWith(".png")) {
            pipeline = pipeline.png({ compressionLevel: 9, effort: 9, palette: true });
          } else {
            pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
          }
          const buf = await pipeline.toBuffer();
          // Only overwrite if size decreased
          if (buf.length < orig) {
            fs.writeFileSync(fullPath, buf);
            console.log(`project ${f}: ${(orig/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
          }
        }
      }
    }
  }

  console.log("Image optimization complete.");
}

optimizeImages().catch(console.error);


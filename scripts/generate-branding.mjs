import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = new URL('../', import.meta.url)
const icon = await readFile(new URL('public/favicon/favicon.svg', root))
const sizes = { 'favicon-16x16.png': 16, 'favicon-32x32.png': 32, 'apple-touch-icon.png': 180, 'android-chrome-192x192.png': 192, 'android-chrome-512x512.png': 512 }
await Promise.all(Object.entries(sizes).map(([name, size]) => sharp(icon).resize(size, size).png().toFile(fileURLToPath(new URL(`public/favicon/${name}`, root)))))
const png = await sharp(icon).resize(32, 32).png().toBuffer()
const ico = Buffer.alloc(22)
ico.writeUInt16LE(1, 2)
ico.writeUInt16LE(1, 4)
ico[6] = 32
ico[7] = 32
ico.writeUInt16LE(1, 10)
ico.writeUInt16LE(32, 12)
ico.writeUInt32LE(png.length, 14)
ico.writeUInt32LE(22, 18)
await writeFile(new URL('public/favicon/favicon.ico', root), Buffer.concat([ico, png]))
await sharp(await readFile(new URL('src/assets/branding/share-card.svg', root))).png().toFile(fileURLToPath(new URL('public/images/social-card.png', root)))
console.log('Generated personal favicon sizes and the 1200 × 630 sharing image.')

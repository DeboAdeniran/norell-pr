import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PUBLIC_DIR = join(__dirname, '..', 'public')

const QUALITY = { jpg: 82, png: 85 }
const EXTS = new Set(['.jpg', '.jpeg', '.png'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await walk(full))
    else if (EXTS.has(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

async function optimise(filePath) {
  const ext = extname(filePath).toLowerCase()
  const before = (await stat(filePath)).size
  const tmp = filePath + '.tmp'

  const pipeline = sharp(filePath)
  const meta = await pipeline.metadata()

  const resized = meta.width > 2400
    ? pipeline.resize({ width: 2400, withoutEnlargement: true })
    : pipeline

  if (ext === '.png') {
    await resized.png({ quality: QUALITY.png, compressionLevel: 9 }).toFile(tmp)
  } else {
    await resized.jpeg({ quality: QUALITY.jpg, mozjpeg: true, progressive: true }).toFile(tmp)
  }

  await rename(tmp, filePath)

  const after = (await stat(filePath)).size
  const saved = ((before - after) / before * 100).toFixed(1)
  console.log(`  ${basename(filePath)}: ${kb(before)} → ${kb(after)}  (${saved}% smaller)`)
}

const kb = n => `${(n / 1024).toFixed(0)}KB`

const files = await walk(PUBLIC_DIR)
console.log(`\nOptimising ${files.length} image(s) in public/...\n`)
for (const f of files) await optimise(f)
console.log('\nDone.')

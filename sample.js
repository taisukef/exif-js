import { EXIF } from "./EXIF.js";

const bin = new Uint8Array(await Deno.readFile("example/dsc_09827.jpg"));
const exif = EXIF.readFromBinaryFile(bin.buffer);
console.log(exif);

//import { EXIF } from "https://taisukef.github.io/exif-js/EXIF.js";
import { EXIF } from "./EXIF.js";

const bin = await Deno.readFile("example/displayp3.jpg");
const exif = EXIF.readFromBinaryFile(bin);
console.log(exif);

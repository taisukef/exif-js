//import { EXIF } from "https://taisukef.github.io/exif-js/EXIF.js";
import { EXIF } from "./EXIF.js";

const fn = "example/rgb.jpg";
//const fn = "example/displayp3.jpg";
const bin = await Deno.readFile(fn);
const exif = EXIF.readFromBinaryFile(bin);
console.log("sRGB:", exif.ColorSpace == "sRGB");

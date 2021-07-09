import { EXIF } from "./EXIF.js";

//const fn = "example/dsc_09827.jpg";
const fn = "example/DJI_0163.JPG";
const bin = new Uint8Array(await Deno.readFile(fn));
const exif = EXIF.readFromBinaryFile(bin.buffer);
console.log(exif);
await Deno.writeFile("makernotes.txt", new Uint8Array(exif.MakerNote));

/*
Pitch 上                          : -3.40
Yaw   右                          : +40.90
Roll  正面みぎひねり                          : -6.80
Field Of View キタからの角度？                  : 73.7 deg
*/

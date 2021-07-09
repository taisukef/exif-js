import * as t from "https://deno.land/std/testing/asserts.ts";
import { EXIF } from "./EXIF.js";

Deno.test("read", async () => {
    const bin = new Uint8Array(await Deno.readFile("example/dsc_09827.jpg"));
    const exif = EXIF.readFromBinaryFile(bin.buffer);
    t.assertEquals(exif.Make, "NIKON CORPORATION");
});
Deno.test("gps", async () => {
    const bin = new Uint8Array(await Deno.readFile("example/IMG_3508.jpg"));
    const exif = EXIF.readFromBinaryFile(bin.buffer);
    const ll = EXIF.toLatLng(exif);
    console.log(ll);
    t.assertEquals(ll, { lat: 35.930702777777775, lng: 136.18704166666666 });
});

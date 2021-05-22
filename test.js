import * as t from "https://deno.land/std/testing/asserts.ts";
import { EXIF } from "./EXIF.js";

Deno.test("read", async () => {
    const bin = new Uint8Array(await Deno.readFile("example/dsc_09827.jpg"));
    const exif = EXIF.readFromBinaryFile(bin.buffer);
    t.assertEquals(exif.Make, "NIKON CORPORATION");
})

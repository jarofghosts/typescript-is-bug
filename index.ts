import { is } from "typescript-is";

interface Test {
  a: boolean;
  b: boolean;
}

is<Omit<Test, "b">>({ a: true });

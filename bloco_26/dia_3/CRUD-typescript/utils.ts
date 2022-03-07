import { readFile, writeFile } from "fs/promises";
import Book from "./interfaces/Books";

export async function read(file: string): Promise<Book[]> {
  const data = await readFile(file, 'utf-8');
  const Books: Book[] = JSON.parse(data);
  return JSON.parse(data);
}

export async function write(data: Book[]): Promise<void> {
  const file = await writeFile('./books.json', JSON.stringify(data));
  return file;
}
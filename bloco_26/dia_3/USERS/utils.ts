import { readFile, writeFile } from "fs/promises";

import User from './interfaces/users';

export async function read(file: string): Promise<User[]> {
  const data = await readFile(file, 'utf-8');
  const Books: User[] = JSON.parse(data);
  return JSON.parse(data);
}

export async function write(data: User[]): Promise<void> {
  const file = await writeFile('./users.json', JSON.stringify(data));
  return file;
}
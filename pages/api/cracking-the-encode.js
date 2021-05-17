import fs from 'fs';
import path from 'path';

const file = path.resolve('.', 'files/Cracking_the_Encode.pdf');
const buffer = fs.readFileSync(file);

export default function (req, res) {
  res.setHeader('Content-Type', 'application/pdf');
  res.send(buffer);
}
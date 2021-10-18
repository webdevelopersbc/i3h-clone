import { Request, Response } from 'express';
import * as path from 'path';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
  '.webmanifest',
];

const resolvePath = (file: string) => path.resolve(`../dist/nhlapi/${file}`);

export function FrontEndMiddleware(
  req: Request,
  res: Response,
  next: () => void
): void {
  const { originalUrl } = req;

  if (originalUrl.indexOf('/api/') === 0) {
    // it starts with api prefix --> continue with execution
    next();
  } else if (
    allowedExt.filter(ext => originalUrl.indexOf(ext) > 0).length > 0
  ) {
    // it has a file extension --> resolve the file
    res.sendFile(resolvePath(originalUrl));
  } else {
    // in all other cases, redirect to the index.html
    res.sendFile(path.resolve(`../dist/nhlapi/index.html`));
  }
}

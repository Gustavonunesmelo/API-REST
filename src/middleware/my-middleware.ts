import { Request, Response, NextFunction } from "express";

export function myMiddlerware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log( "Passou pelo Middleware")

  return next()
}
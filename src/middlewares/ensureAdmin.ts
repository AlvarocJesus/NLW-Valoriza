import { NextFunction, Request, response, Response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction){
  const admin = true;

  if(admin){
    return next();
  }

  return response.status(401).json({ error: "Unauthorized" });
}
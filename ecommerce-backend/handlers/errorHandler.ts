import { NextFunction, Request, Response } from 'express'
import { Error as MongooseError } from 'mongoose'

export const errorHandlerResponse = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (error instanceof MongooseError) {
    let validationErrors: string[] | undefined

    if (error instanceof MongooseError.ValidationError) {
      validationErrors = Object.values(error.errors).map(err => err.message)
    }

    res.status(500).json({
      error: validationErrors ?? error.message
    })

    return
  }

  res.status(404).json({
    error: error.message
  })
}

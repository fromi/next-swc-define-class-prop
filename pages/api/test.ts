import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  test: string
}

class Test {
  field = 'Hello'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ test: new Test().field })
}
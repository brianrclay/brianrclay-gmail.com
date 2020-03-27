import React from 'react'
import { createSvgIcon } from './base'
export const  Bell = createSvgIcon(({ color }) => (
  <React.Fragment>

      <path fill={color} fillRule="evenodd" d="M10.492 13.542a.5.5 0 01.258.658 3 3 0 01-5.5.002.5.5 0 01.916-.402 2.002 2.002 0 003.668 0 .5.5 0 01.658-.258zM8 0a5 5 0 015 5v.296a3.48 3.48 0 001.74 3.02C15.538 8.774 16 9.337 16 10c0 1.806-3.583 3-8 3s-8-1.194-8-3c0-.663.463-1.226 1.26-1.684A3.481 3.481 0 003 5.296V5a5 5 0 015-5zm0 1a4 4 0 00-4 4v.296a4.481 4.481 0 01-2.243 3.888C1.238 9.48 1 9.772 1 10c0 .956 3.133 2 7 2s7-1.044 7-2c0-.228-.238-.519-.756-.816A4.48 4.48 0 0112 5.296V5a4 4 0 00-4-4z" clipRule="evenodd" />
      </React.Fragment>
))
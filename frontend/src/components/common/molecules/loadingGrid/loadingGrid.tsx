'use client'

import { Grid } from 'react-loader-spinner'

export default function LoadingGrid() {
  return (
    <Grid
      height="80"
      width="80"
      color="#153f4f"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
    />
  )
}

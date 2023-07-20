'use client'

import { Grid } from 'react-loader-spinner'
import styles from './loadingGrid.module.css'

export default function LoadingGrid() {
  return (
    <div className={styles.wrapper}>
      <Grid
        height="80"
        width="80"
        color="#153f4f"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
      />
    </div>
  )
}

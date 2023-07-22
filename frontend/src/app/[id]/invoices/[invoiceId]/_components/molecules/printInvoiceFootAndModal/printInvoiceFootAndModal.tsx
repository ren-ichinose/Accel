'use client'

import { useState } from 'react'
import PrintInvoiceModal from '../../atoms/printInvoiceModal/printInvoiceModal'
import PrintInvoiceFoot from '../printInvoiceFoot/printInvoiceFoot'

export default function PrintInvoiceVew() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [uri, isUri] = useState<string | undefined>(undefined)
  const handleShow = () => {
    setIsShow(true)
  }
  const handleHide = () => {
    setIsShow(false)
  }
  const handleUri = (dataUri: string) => {
    isUri(dataUri)
  }

  return (
    <div>
      <PrintInvoiceModal isShow={isShow} handleHide={handleHide} uri={uri} />
      <PrintInvoiceFoot handleShow={handleShow} handleUri={handleUri} />
    </div>
  )
}

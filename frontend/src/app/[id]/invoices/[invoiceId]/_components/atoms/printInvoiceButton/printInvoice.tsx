'use client'

import Button from '@/components/common/atoms/button/button'
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, rgb } from 'pdf-lib'

export default function PrintInvoiceButton() {
  async function createPdf() {
    const pdfPath = '/pdf/invoiceTest.pdf'
    const fontPath = '/font/LINESeedJP_Rg.ttf'

    const existingPdfBytes = await fetch(pdfPath).then((res) =>
      res.arrayBuffer()
    )
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    pdfDoc.registerFontkit(fontkit)
    const fontData = await pdfDoc.embedFont(
      await (await fetch(fontPath)).arrayBuffer(),
      { subset: true }
    )

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    firstPage.drawText('Print Invoice', {
      x: 0,
      y: 0,
      size: 16,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })
    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    window.open(url)
  }

  const handleDownload = async () => {
    await createPdf()
  }

  return (
    <Button
      className="mainFootPrintInvoice"
      type="button"
      text="発行"
      onClick={handleDownload}
    />
  )
}

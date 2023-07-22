import Button from '@/components/common/atoms/button/button'
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, rgb } from 'pdf-lib'

type InvoiceProduct = {
  id: string
  itemOrder: number
  transactionDate: string | null
  productName: string
  quantity: number
  unit: string
  price: string
  taxClassification: number
}

type Invoice = {
  id: string
  businessId: string
  documentIssueDate: string
  documentNumber: string
  customerName: string
  customerTitle: string
  businessDetails: string
  notes: string
  mSeal: string | null
  invoiceProducts: InvoiceProduct[]
}

const sampleData: Invoice = {
  id: '0e434ee2-2a71-49c7-a705-46d34bd02882',
  businessId: '01caa997-c433-402e-9ea8-1a736e80f396',
  documentIssueDate: '2023-07-20T15:00:00.000Z',
  documentNumber: '0001',
  customerName: '株式会社〇〇コンサルティング',
  customerTitle: '御中',
  businessDetails:
    '〇 〇 商 事 株 式 会 社\n〒100-0001\n東京都千代田区千代田1番1号\n登録番号：T1234567890123\n\nTEL：03-1234-5678\nFAX：03-1234-1234\nE-Mail：XXX@example.co.jp\n担当：日本　太郎',
  notes: '振込先：〇〇銀⾏ 〇〇⽀店 普通 1234567 マルマルシヨウジ(カ',
  mSeal: null,
  invoiceProducts: [
    {
      id: '95855115-10d3-4d5c-a454-de1a9f798210',
      itemOrder: 0,
      transactionDate: '2023-06-10T15:00:00.000Z',
      productName: 'サンプル商品',
      quantity: 1000,
      unit: '個',
      price: '1000',
      taxClassification: 2,
    },
    {
      id: '95855115-10d3-4d5c-a454-de1a9f798210',
      itemOrder: 1,
      transactionDate: '2023-06-10T15:00:00.000Z',
      productName: 'サンプル商品',
      quantity: 1000,
      unit: '個',
      price: '1000',
      taxClassification: 2,
    },
    {
      id: '95855115-10d3-4d5c-a454-de1a9f798210',
      itemOrder: 2,
      transactionDate: '2023-06-10T15:00:00.000Z',
      productName: 'サンプル商品',
      quantity: 1000,
      unit: '個',
      price: '1000',
      taxClassification: 1,
    },
  ],
}

const { invoiceProducts: invoiceProductsData, ...invoiceData } = sampleData

export default function PrintInvoiceButton({
  handleShow,
  handleUri,
}: {
  handleShow: () => void
  handleUri: (dataUri: string) => void
}) {
  async function createPdf() {
    const pdfPath = '/pdf/invoice.pdf'
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

    const fontSize = 6.55

    // Todo：日付の関数が完了次第修正する。
    firstPage.drawText(invoiceData.documentNumber, {
      x: 482,
      y: 770.5,
      size: 5.475,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    firstPage.drawText(invoiceData.documentNumber, {
      x: 482,
      y: 760.5,
      size: 5.475,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    firstPage.drawText(invoiceData.customerName, {
      x: 55,
      y: 708.5,
      size: 9.3,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    firstPage.drawText(invoiceData.customerTitle, {
      x: 195,
      y: 708.5,
      size: 9.3,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    // businessDetails
    // 下揃えのためロジックが複雑になっている。

    const businessDetailsArray = invoiceData.businessDetails.split('\n')
    const longestLine = businessDetailsArray
      .slice()
      .sort((a, b) => b.length - a.length)
    const lineHeight = 10.1
    const businessDetailsWidth = fontData.widthOfTextAtSize(
      longestLine[0],
      fontSize
    )
    const startingY = 597.5 + (businessDetailsArray.length - 1) * lineHeight
    const startingX = 542 - (businessDetailsWidth + 16)

    businessDetailsArray.forEach((line, index) => {
      firstPage.drawText(line, {
        x: startingX,
        y: startingY - index * lineHeight,
        size: fontSize,
        font: fontData,
        color: rgb(0.8, 0.2, 0.2),
      })
    })

    // Todo：計算の関数が完了次第修正する。
    const textWidthTotalAmount = fontData.widthOfTextAtSize(
      '¥3,280,000',
      11.485
    )
    firstPage.drawText('¥3,280,000', {
      x: 236 - textWidthTotalAmount,
      y: 600,
      size: 11.485,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    // invoiceProducts
    // Todo：日付の関数が完了次第修正する。
    if (invoiceProductsData[0].transactionDate)
      firstPage.drawText(invoiceProductsData[0].transactionDate, {
        x: 66,
        y: 534.5,
        size: fontSize,
        font: fontData,
        color: rgb(0.2, 0.2, 0.2),
      })

    if (invoiceProductsData[0].productName)
      firstPage.drawText(invoiceProductsData[0].productName, {
        x: 116,
        y: 534.5,
        size: fontSize,
        font: fontData,
        color: rgb(0.2, 0.2, 0.2),
      })

    // Todo：カンマ区切りの関数が完了次第修正する。
    if (invoiceProductsData[0].quantity && invoiceProductsData[0].unit) {
      const quantityAndUnit = `${invoiceProductsData[0].quantity} ${invoiceProductsData[0].unit}`
      const textWidth = fontData.widthOfTextAtSize(quantityAndUnit, fontSize)
      firstPage.drawText(quantityAndUnit, {
        x: 418 - textWidth,
        y: 534.5,
        size: fontSize,
        font: fontData,
        color: rgb(0.8, 0.2, 0.2),
      })
    }

    // Todo：計算の関数が完了次第修正する。
    if (invoiceProductsData[0].price) {
      const textWidth = fontData.widthOfTextAtSize(
        invoiceProductsData[0].price.toString(),
        fontSize
      )
      firstPage.drawText(invoiceProductsData[0].price.toString(), {
        x: 480 - textWidth,
        y: 534.5,
        size: fontSize,
        font: fontData,
        color: rgb(0.8, 0.2, 0.2),
      })
    }

    // Todo：計算の関数が完了次第修正する。
    const textWidth = fontData.widthOfTextAtSize('¥1,000,000', fontSize)
    firstPage.drawText('¥1,000,000', {
      x: 540 - textWidth,
      y: 534.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxExcludedPrice10Width = fontData.widthOfTextAtSize(
      '¥2,000,000',
      fontSize
    )
    firstPage.drawText('¥2,000,000', {
      x: 256 - taxExcludedPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxPrice10Width = fontData.widthOfTextAtSize('¥200,000', fontSize)
    firstPage.drawText('¥200,000', {
      x: 317 - taxPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxIncludedPrice10Width = fontData.widthOfTextAtSize(
      '¥2,200,000',
      fontSize
    )
    firstPage.drawText('¥2,200,000', {
      x: 378 - taxIncludedPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxExcludedPrice8Width = fontData.widthOfTextAtSize(
      '¥1,000,000',
      fontSize
    )
    firstPage.drawText('¥1,000,000', {
      x: 256 - taxExcludedPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxPrice8Width = fontData.widthOfTextAtSize('¥80,000', fontSize)
    firstPage.drawText('¥80,000', {
      x: 317 - taxPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const taxIncludedPrice8Width = fontData.widthOfTextAtSize(
      '¥1,080,000',
      fontSize
    )
    firstPage.drawText('¥1,080,000', {
      x: 378 - taxIncludedPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const totalTaxExcludedPrice = fontData.widthOfTextAtSize(
      '¥3,000,000',
      fontSize
    )
    firstPage.drawText('¥3,000,000', {
      x: 540 - totalTaxExcludedPrice,
      y: 232.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const totalTaxPrice = fontData.widthOfTextAtSize('¥280,000', fontSize)
    firstPage.drawText('¥280,000', {
      x: 540 - totalTaxPrice,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    const totalTaxIncludedPrice = fontData.widthOfTextAtSize(
      '¥3,280,000',
      fontSize
    )
    firstPage.drawText('¥3,280,000', {
      x: 540 - totalTaxIncludedPrice,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.8, 0.2, 0.2),
    })

    // note
    if (invoiceData.notes)
      firstPage.drawText(invoiceData.notes, {
        x: 55,
        y: 130,
        size: fontSize,
        font: fontData,
        color: rgb(0.2, 0.2, 0.2),
      })

    const dataUri = await pdfDoc.saveAsBase64({ dataUri: true })
    handleUri(dataUri)
    handleShow()
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

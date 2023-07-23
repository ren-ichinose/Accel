import Button from '@/components/common/atoms/button/button'
import formatDate from '@/utils/formatDate'
import formatToJPY from '@/utils/formatToJPY'
import getFinancialData from '@/utils/getFinancialData'
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, rgb } from 'pdf-lib'

type InvoiceProduct = {
  id: string
  itemOrder: number
  transactionDate: string | null
  productName: string
  quantity: number
  unit: string | null
  price: number
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
      quantity: 10000,
      unit: '個',
      price: 1000,
      taxClassification: 2,
    },
    {
      id: '95855115-10d3-4d5c-a454-de1a9f798210',
      itemOrder: 1,
      transactionDate: '2023-06-10T15:00:00.000Z',
      productName: 'サンプル商品',
      quantity: 10000,
      unit: '個',
      price: 1000,
      taxClassification: 2,
    },
    {
      id: '95855115-10d3-4d5c-a454-de1a9f798210',
      itemOrder: 2,
      transactionDate: '2023-06-10T15:00:00.000Z',
      productName: 'サンプル商品',
      quantity: 10000,
      unit: '個',
      price: 1000,
      taxClassification: 1,
    },
  ],
}

const { invoiceProducts: invoiceProductsData, ...invoiceData } = sampleData
const { taxDetails10, taxDetails8, totalAmount } =
  getFinancialData(invoiceProductsData)

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
    const fontSize = 6.55

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

    // Document Header
    const formattedDate = formatDate(invoiceData.documentIssueDate)
    firstPage.drawText(formattedDate, {
      x: 482,
      y: 770.5,
      size: 5.475,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
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

    const businessDetailsArray = invoiceData.businessDetails.split('\n')
    const longestLine = businessDetailsArray
      .slice()
      .sort((a, b) => b.length - a.length)
    const businessDetailsLineHeight = 10.1
    const businessDetailsWidth = fontData.widthOfTextAtSize(
      longestLine[0],
      fontSize
    )
    const startingY =
      597.5 + (businessDetailsArray.length - 1) * businessDetailsLineHeight
    const startingX = 542 - (businessDetailsWidth + 16)

    businessDetailsArray.forEach((line, index) => {
      firstPage.drawText(line, {
        x: startingX,
        y: startingY - index * businessDetailsLineHeight,
        size: fontSize,
        font: fontData,
        color: rgb(0.2, 0.2, 0.2),
      })
    })

    const formtedTotalAmount = formatToJPY(totalAmount.totalTaxIncludedPrice)
    const textWidthTotalAmount = fontData.widthOfTextAtSize(
      formtedTotalAmount,
      11.485
    )
    firstPage.drawText(formtedTotalAmount, {
      x: 236 - textWidthTotalAmount,
      y: 600,
      size: 11.485,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    // Invoice Products
    const invoiceProductsLineHeight = 22.9
    invoiceProductsData.forEach((invoiceProduct, index) => {
      if (invoiceProduct.transactionDate) {
        const formattedTransactionDate = formatDate(
          invoiceProduct.transactionDate
        )
        firstPage.drawText(formattedTransactionDate, {
          x: 63,
          y: 534.5 - index * invoiceProductsLineHeight,
          size: fontSize,
          font: fontData,
          color: rgb(0.2, 0.2, 0.2),
        })
      }

      if (
        invoiceProduct.productName &&
        invoiceProduct.taxClassification === 2
      ) {
        firstPage.drawText(invoiceProduct.productName, {
          x: 116,
          y: 534.5 - index * invoiceProductsLineHeight,
          size: fontSize,
          font: fontData,
          color: rgb(0.2, 0.2, 0.2),
        })
      }

      if (invoiceProduct.productName && invoiceProduct.taxClassification === 1)
        firstPage.drawText(`${invoiceProduct.productName} ※`, {
          x: 116,
          y: 534.5 - index * invoiceProductsLineHeight,
          size: fontSize,
          font: fontData,
          color: rgb(0.2, 0.2, 0.2),
        })

      if (invoiceProduct.quantity) {
        let quantityAndUnit = ''
        const formattedQuantity = invoiceProduct.quantity.toLocaleString()

        if (invoiceProduct.unit) {
          quantityAndUnit = `${formattedQuantity} ${invoiceProduct.unit}`
        }

        const textWidth = fontData.widthOfTextAtSize(
          quantityAndUnit || formattedQuantity,
          fontSize
        )
        firstPage.drawText(quantityAndUnit || formattedQuantity, {
          x: 418 - textWidth,
          y: 534.5 - index * invoiceProductsLineHeight,
          size: fontSize,
          font: fontData,
          color: rgb(0.2, 0.2, 0.2),
        })
      }

      if (invoiceProduct.price) {
        const formattedPrice = formatToJPY(invoiceProduct.price)
        const textWidth = fontData.widthOfTextAtSize(formattedPrice, fontSize)
        firstPage.drawText(formattedPrice, {
          x: 480 - textWidth,
          y: 534.5 - index * invoiceProductsLineHeight,
          size: fontSize,
          font: fontData,
          color: rgb(0.2, 0.2, 0.2),
        })
      }

      const formattedProductTotalPrice = formatToJPY(
        invoiceProduct.price * invoiceProduct.quantity
      )
      const taxWidth = fontData.widthOfTextAtSize(
        formattedProductTotalPrice,
        fontSize
      )
      firstPage.drawText(formattedProductTotalPrice, {
        x: 540 - taxWidth,
        y: 534.5 - index * invoiceProductsLineHeight,
        size: fontSize,
        font: fontData,
        color: rgb(0.2, 0.2, 0.2),
      })
    })

    // Tax Details
    // 10%
    const formtedTaxExcludedPrice10 = formatToJPY(taxDetails10.taxExcludedPrice)
    const taxExcludedPrice10Width = fontData.widthOfTextAtSize(
      formtedTaxExcludedPrice10,
      fontSize
    )
    firstPage.drawText(formtedTaxExcludedPrice10, {
      x: 256 - taxExcludedPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const formtedTaxPrice10 = formatToJPY(taxDetails10.taxPrice)
    const taxPrice10Width = fontData.widthOfTextAtSize(
      formtedTaxPrice10,
      fontSize
    )
    firstPage.drawText(formtedTaxPrice10, {
      x: 317 - taxPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const formtedTaxIncludedPrice10 = formatToJPY(taxDetails10.taxIncludedPrice)
    const taxIncludedPrice10Width = fontData.widthOfTextAtSize(
      formtedTaxIncludedPrice10,
      fontSize
    )
    firstPage.drawText(formtedTaxIncludedPrice10, {
      x: 378 - taxIncludedPrice10Width,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    // 8%
    const formtedTaxExcludedPrice8 = formatToJPY(taxDetails8.taxExcludedPrice)
    const taxExcludedPrice8Width = fontData.widthOfTextAtSize(
      formtedTaxExcludedPrice8,
      fontSize
    )
    firstPage.drawText(formtedTaxExcludedPrice8, {
      x: 256 - taxExcludedPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const formtedTaxPrice8 = formatToJPY(taxDetails8.taxPrice)
    const taxPrice8Width = fontData.widthOfTextAtSize(
      formtedTaxPrice8,
      fontSize
    )
    firstPage.drawText(formtedTaxPrice8, {
      x: 317 - taxPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const formtedTaxIncludedPrice8 = formatToJPY(taxDetails8.taxIncludedPrice)
    const taxIncludedPrice8Width = fontData.widthOfTextAtSize(
      formtedTaxIncludedPrice8,
      fontSize
    )
    firstPage.drawText(formtedTaxIncludedPrice8, {
      x: 378 - taxIncludedPrice8Width,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    // Total Amount
    const formtedTotalTaxExcludedPrice = formatToJPY(
      totalAmount.totalTaxExcludedPrice
    )
    const totalTaxExcludedPrice = fontData.widthOfTextAtSize(
      formtedTotalTaxExcludedPrice,
      fontSize
    )
    firstPage.drawText(formtedTotalTaxExcludedPrice, {
      x: 540 - totalTaxExcludedPrice,
      y: 232.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const formtedTotalTaxPrice = formatToJPY(totalAmount.totalTaxPrice)
    const totalTaxPrice = fontData.widthOfTextAtSize(
      formtedTotalTaxPrice,
      fontSize
    )
    firstPage.drawText(formtedTotalTaxPrice, {
      x: 540 - totalTaxPrice,
      y: 210,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
    })

    const totalTaxIncludedPrice = fontData.widthOfTextAtSize(
      formtedTotalAmount,
      fontSize
    )
    firstPage.drawText(formtedTotalAmount, {
      x: 540 - totalTaxIncludedPrice,
      y: 187.5,
      size: fontSize,
      font: fontData,
      color: rgb(0.2, 0.2, 0.2),
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

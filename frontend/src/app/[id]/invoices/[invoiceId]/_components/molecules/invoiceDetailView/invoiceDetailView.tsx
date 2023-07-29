'use client'

import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { HiOutlineClipboard } from 'react-icons/hi'
import { Invoice } from '@/interfaces/main.interface'
import formatDate from '@/utils/formatDate'
import formatToJPY from '@/utils/formatToJPY'
import getFinancialData from '@/utils/getFinancialData'
import styles from './invoiceDetailView.module.css'

export default function InvoiceDetailView({
  invoiceId,
}: {
  invoiceId: string
}) {
  const queryClient: QueryClient = useQueryClient()
  const invoiceData = queryClient.getQueryData<Invoice>([
    `invoice_${invoiceId}`,
  ])
  if (!invoiceData) return null

  const {
    invoiceProducts: invoiceProductsData,
    ...invoiceWithoutProductsData
  } = invoiceData

  const { taxDetails10, taxDetails8, taxDetails0, totalAmount } =
    getFinancialData(invoiceProductsData)

  const businessDetailsArray =
    invoiceWithoutProductsData.businessDetails.split('\n')

  const noteArray = invoiceWithoutProductsData.notes
    ? invoiceWithoutProductsData.notes.split('\n')
    : []

  return (
    <div className={styles.container}>
      <h3 className={styles.contentTitle}>請求書</h3>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          基本情報
        </h4>
        {invoiceWithoutProductsData.documentIssueDate && (
          <div className={styles.itemTitleContainer}>
            <p className={styles.itemTitle}>発行日</p>
            <p>{formatDate(invoiceWithoutProductsData.documentIssueDate)}</p>
          </div>
        )}
        {invoiceWithoutProductsData.documentNumber && (
          <div className={styles.itemTitleContainer}>
            <p className={styles.itemTitle}>請求番号</p>
            <p>{invoiceWithoutProductsData.documentNumber}</p>
          </div>
        )}
        <div className={styles.itemTitleContainer}>
          <p className={styles.itemTitle}>取引先名</p>
          <p>
            {`${invoiceWithoutProductsData.customerName} ${invoiceWithoutProductsData.customerTitle}`}
          </p>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          発行者情報
        </h4>
        {businessDetailsArray.map((businessDetail) => (
          <p key={businessDetail}>{businessDetail}</p>
        ))}
      </div>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          明細
        </h4>

        {invoiceProductsData.map((product) => {
          const formattedProductTotalPrice =
            product.quantity && product.price
              ? formatToJPY(product.quantity * product.price)
              : ''
          const formattedPrice = product.price ? formatToJPY(product.price) : ''
          const formattedQuantityAndUnit = product.quantity
            ? `${product.quantity}${product.unit || ''}`
            : ''
          const formattedPriceAndQuantityAndUnit =
            formattedPrice && formattedQuantityAndUnit
              ? `${formattedPrice} × ${formattedQuantityAndUnit}`
              : ''

          return (
            <div
              className={styles.productItemsContainer}
              key={product.itemOrder}
            >
              <div className={styles.productItemContainer}>
                <p className={styles.productName}>
                  {`${product.productName} ${
                    product.taxClassification === 1 ? '＊' : ''
                  }`}
                </p>
                <p className={styles.productTotalPrice}>
                  {formattedProductTotalPrice}
                </p>
              </div>

              <div className={styles.productItemContainer}>
                <p className={styles.transactionDate}>
                  {product.transactionDate
                    ? formatDate(product.transactionDate)
                    : ''}
                </p>
                <p className={styles.priceAndQuantityAndUnit}>
                  {formattedPriceAndQuantityAndUnit ||
                    formattedPrice ||
                    formattedQuantityAndUnit ||
                    ''}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          {' '}
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          税率別内訳
        </h4>
        <table className={styles.taxDetailsTable}>
          <thead>
            <tr>
              <th> </th>
              <th>税抜金額</th>
              <th>消費税金額</th>
              <th>税込金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>10% 対象</th>
              <td>{formatToJPY(taxDetails10.taxExcludedPrice)}</td>
              <td>{formatToJPY(taxDetails10.taxPrice)}</td>
              <td>{formatToJPY(taxDetails10.taxIncludedPrice)}</td>
            </tr>
            {taxDetails8.taxExcludedPrice > 0 && (
              <tr>
                <th>軽減 8% 対象</th>
                <td>{formatToJPY(taxDetails8.taxExcludedPrice)}</td>
                <td>{formatToJPY(taxDetails8.taxPrice)}</td>
                <td>{formatToJPY(taxDetails8.taxIncludedPrice)}</td>
              </tr>
            )}
            {taxDetails0.taxExcludedPrice > 0 && (
              <tr>
                <th>対象外</th>
                <td>{formatToJPY(taxDetails0.taxExcludedPrice)}</td>
                <td>¥0</td>
                <td>{formatToJPY(taxDetails0.taxIncludedPrice)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          {' '}
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          合計金額
        </h4>
        <table className={styles.totalAmountTable}>
          <tbody>
            <tr>
              <th>小計</th>
              <td>{formatToJPY(totalAmount.totalTaxExcludedPrice)}</td>
            </tr>
            <tr>
              <th>消費税</th>
              <td>{formatToJPY(totalAmount.totalTaxPrice)}</td>
            </tr>
            <tr>
              <th>合計</th>
              <td>{formatToJPY(totalAmount.totalTaxIncludedPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.itemContainer}>
        <h4 className={styles.itemsTitle}>
          {' '}
          <span className={styles.itemsTitleIcon}>
            <HiOutlineClipboard />
          </span>
          備考
        </h4>
        {noteArray.length > 0 &&
          noteArray.map((businessDetail) => (
            <p key={businessDetail}>{businessDetail}</p>
          ))}
      </div>
    </div>
  )
}

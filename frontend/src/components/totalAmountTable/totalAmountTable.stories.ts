import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TotalAmountTable from './totalAmountTable'

const meta: Meta<typeof TotalAmountTable> = {
  title: 'TotalAmountTable/TotalAmountTable',
  component: TotalAmountTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TotalAmountTable>

export const Default: Story = {
  args: {
    totalAmount: {
      totalTaxExcludedPrice: '¥10,000,000',
      totalTaxPrice: '¥940,000',
      totalTaxIncludedPrice: '¥10,940,000',
    },
  },
}

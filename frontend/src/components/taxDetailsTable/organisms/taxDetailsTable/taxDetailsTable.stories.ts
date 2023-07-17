import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TaxDetailsTable from './taxDetailsTable'

const meta: Meta<typeof TaxDetailsTable> = {
  title: 'TaxDetailsTable/TaxDetailsTable',
  component: TaxDetailsTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TaxDetailsTable>

export const Default: Story = {
  args: {
    taxDetails8: {
      taxExcludedPrice: '¥3,000,000',
      taxPrice: '¥240,000',
      taxIncludedPrice: '¥3,240,000',
    },
    taxDetails10: {
      taxExcludedPrice: '¥7,000,000',
      taxPrice: '700,000',
      taxIncludedPrice: '7,700,000',
    },
  },
}

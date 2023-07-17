import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TaxDetailsTableBody from './taxDetailsTableBody'

const meta: Meta<typeof TaxDetailsTableBody> = {
  title: 'TaxDetailsTable/TaxDetailsTableBody',
  component: TaxDetailsTableBody,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TaxDetailsTableBody>

export const Default: Story = {
  args: {
    taxDetails8: {
      taxExcludedPrice: '¥3,000,000',
      taxPrice: '240,000',
      taxIncludedPrice: '3,240,000',
    },
    taxDetails10: {
      taxExcludedPrice: '7,000,000',
      taxPrice: '700,000',
      taxIncludedPrice: '7,700,000',
    },
  },
}

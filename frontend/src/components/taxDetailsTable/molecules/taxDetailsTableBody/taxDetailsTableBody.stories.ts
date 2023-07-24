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
      taxExcludedPrice: 3000000,
      taxPrice: 240000,
      taxIncludedPrice: 3240000,
    },
    taxDetails10: {
      taxExcludedPrice: 7000000,
      taxPrice: 700000,
      taxIncludedPrice: 7700000,
    },
  },
}

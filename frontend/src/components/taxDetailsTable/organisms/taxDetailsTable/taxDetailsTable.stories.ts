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

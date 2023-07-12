import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import ProductsTableRow from './productsTableRow'

const meta: Meta<typeof ProductsTableRow> = {
  title: 'ProductsTableRow/ProductsTableRow',
  component: ProductsTableRow,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsTableRow>

export const Default: Story = {
  args: {},
}

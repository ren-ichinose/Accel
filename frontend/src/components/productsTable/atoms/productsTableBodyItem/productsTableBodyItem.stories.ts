import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import ProductsTableBodyItem from './productsTableBodyItem'

const meta: Meta<typeof ProductsTableBodyItem> = {
  title: 'ProductsTable/ProductsTableBodyItem',
  component: ProductsTableBodyItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsTableBodyItem>

export const Default: Story = {
  args: {},
}

export const TextAlignCenter: Story = {
  args: { textAlign: 'center' },
}

export const TextAlignRight: Story = {
  args: { textAlign: 'right' },
}

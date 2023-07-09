import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import ProductsTableHeader from './productsTableHeader'

const meta: Meta<typeof ProductsTableHeader> = {
  title: 'ProductsTable/ProductsTableHeader',
  component: ProductsTableHeader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsTableHeader>

export const Default: Story = {
  args: {},
}

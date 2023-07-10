import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import ProductsTable from './productsTable'

const meta: Meta<typeof ProductsTable> = {
  title: 'ProductsTable/ProductsTable',
  component: ProductsTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsTable>

export const Default: Story = {
  args: {},
}

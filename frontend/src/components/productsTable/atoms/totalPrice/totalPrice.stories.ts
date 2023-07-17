import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TotalPrice from './totalPrice'

const meta: Meta<typeof TotalPrice> = {
  title: 'ProductsTable/TotalPrice',
  component: TotalPrice,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TotalPrice>

export const Default: Story = {
  args: { totalPrice: '700,000' },
}

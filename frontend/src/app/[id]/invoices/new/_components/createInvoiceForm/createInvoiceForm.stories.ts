import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import tmp from './createInvoiceForm'

const meta: Meta<typeof tmp> = {
  title: 'tmp/tmp',
  component: tmp,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof tmp>

export const Default: Story = {
  args: {},
}

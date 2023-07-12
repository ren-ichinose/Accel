import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import CreateInvoiceForm from './createInvoiceForm'

const meta: Meta<typeof CreateInvoiceForm> = {
  title: 'CreateInvoiceForm/CreateInvoiceForm',
  component: CreateInvoiceForm,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CreateInvoiceForm>

export const Default: Story = {
  args: {},
}

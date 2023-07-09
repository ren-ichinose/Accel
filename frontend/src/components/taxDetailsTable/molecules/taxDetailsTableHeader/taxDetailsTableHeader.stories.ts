import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TaxDetailsTableHeader from './taxDetailsTableHeader'

const meta: Meta<typeof TaxDetailsTableHeader> = {
  title: 'TaxDetailsTable/TaxDetailsTableHeader',
  component: TaxDetailsTableHeader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TaxDetailsTableHeader>

export const Default: Story = {
  args: {},
}

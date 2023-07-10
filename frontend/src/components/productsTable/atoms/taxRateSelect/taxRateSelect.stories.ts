import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TaxRateSelect from './taxRateSelect'

const meta: Meta<typeof TaxRateSelect> = {
  title: 'ProductsTable/TaxRateSelect',
  component: TaxRateSelect,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TaxRateSelect>

export const Default: Story = {
  args: {},
}

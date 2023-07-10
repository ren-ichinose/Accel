import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import FinancialSummary from './financialSummary'

const meta: Meta<typeof FinancialSummary> = {
  title: 'FinancialSummary/FinancialSummary',
  component: FinancialSummary,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FinancialSummary>

export const Default: Story = {
  args: {},
}

import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import SelectBusiness from './selectBusiness'

const meta: Meta<typeof SelectBusiness> = {
  title: 'Auth/SelectBusiness',
  component: SelectBusiness,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectBusiness>

export const Default: Story = {
  args: {},
}

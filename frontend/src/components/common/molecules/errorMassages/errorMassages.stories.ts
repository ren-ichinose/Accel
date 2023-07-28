import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import ErrorMassages from './errorMassages'

const meta: Meta<typeof ErrorMassages> = {
  title: 'ErrorMassages/ErrorMassages',
  component: ErrorMassages,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ErrorMassages>

export const Default: Story = {
  args: {},
}

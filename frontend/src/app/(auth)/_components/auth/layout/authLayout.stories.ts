import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import AuthLayout from './authLayout'

const meta: Meta<typeof AuthLayout> = {
  title: 'AuthLayout/AuthLayout',
  component: AuthLayout,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AuthLayout>

export const Default: Story = {
  args: {},
}

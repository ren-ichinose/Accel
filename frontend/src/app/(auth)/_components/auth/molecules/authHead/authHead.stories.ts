import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import AuthHead from './authHead'

const meta: Meta<typeof AuthHead> = {
  title: 'Auth/AuthHead',
  component: AuthHead,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AuthHead>

export const Default: Story = {
  args: { title: '新規登録' },
}

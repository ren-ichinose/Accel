import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import MainHead from './mainHead'

const meta: Meta<typeof MainHead> = {
  title: 'MainHead/MainHead',
  component: MainHead,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainHead>

export const Default: Story = {
  args: { title: '請求書作成', businessName: '○○商事株式会社' },
}

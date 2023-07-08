import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import MainHeadTitle from './mainHeadTitle'

const meta: Meta<typeof MainHeadTitle> = {
  title: 'MainHead/MainHeadTitle',
  component: MainHeadTitle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainHeadTitle>

export const Default: Story = {
  args: { title: '請求書作成' },
}

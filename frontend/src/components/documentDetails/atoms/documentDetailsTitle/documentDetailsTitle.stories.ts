import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import DocumentDetailsTitle from './documentDetailsTitle'

const meta: Meta<typeof DocumentDetailsTitle> = {
  title: 'DocumentDetails/DocumentDetailsTitle',
  component: DocumentDetailsTitle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentDetailsTitle>

export const Default: Story = {
  args: { title: '基本情報' },
}

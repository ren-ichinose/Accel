import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Textarea from './textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Commpn/Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { placeholder: '8文字以上の英数字', textareaId: 'test', width: '100%' },
}

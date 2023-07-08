import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Input from './input'

const meta: Meta<typeof Input> = {
  title: 'Commpn/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: '8文字以上の英数字', inputId: 'test', width: '100%' },
}

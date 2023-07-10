import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import TextareaWithLabel from './textareaWithLabel'

const meta: Meta<typeof TextareaWithLabel> = {
  title: 'Commpn/Molecules/TextareaWithLabel',
  component: TextareaWithLabel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextareaWithLabel>

export const Default: Story = {
  args: {
    title: '発行日',
    textareaId: '500文字以内',
    placeholder: 'yyyy-mm-dd',
    width: '50%',
  },
}

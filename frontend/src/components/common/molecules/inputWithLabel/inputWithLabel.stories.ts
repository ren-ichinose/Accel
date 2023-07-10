import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import InputWithLabel from './inputWithLabel'

const meta: Meta<typeof InputWithLabel> = {
  title: 'Commpn/Molecules/InputWithLabel',
  component: InputWithLabel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputWithLabel>

export const Default: Story = {
  args: {
    title: '発行日',
    inputId: 'documentIssueDate',
    placeholder: 'yyyy-mm-dd',
    width: '50%',
  },
}

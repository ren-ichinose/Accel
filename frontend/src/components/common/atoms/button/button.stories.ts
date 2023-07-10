import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Button from './button'

const meta: Meta<typeof Button> = {
  title: 'Button/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { text: 'Button', type: 'button' },
}

export const MainFootSubmit: Story = {
  args: { text: '送信', type: 'button', className: 'mainFootSubmit' },
}

export const MainFootCancel: Story = {
  args: { text: 'Button', type: 'button', className: 'mainFootCancel' },
}

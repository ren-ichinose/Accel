import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Header from './header'

const meta: Meta<typeof Header> = {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}

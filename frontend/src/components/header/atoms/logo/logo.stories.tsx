import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Logo from './logo'

const meta: Meta<typeof Logo> = {
  title: 'Header/Logo',
  component: Logo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {},
}

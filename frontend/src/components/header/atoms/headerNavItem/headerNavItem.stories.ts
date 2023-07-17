import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import HeaderNavItem from './headerNavItem'

const meta: Meta<typeof HeaderNavItem> = {
  title: 'Header/HeaderNavItem',
  component: HeaderNavItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeaderNavItem>

export const Default: Story = {
  args: {
    id: 'Home',
    title: 'Home',
    href: '/',
  },
}

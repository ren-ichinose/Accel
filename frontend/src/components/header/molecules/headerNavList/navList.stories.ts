import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import HeaderNavList from './headerNavList'

const meta: Meta<typeof HeaderNavList> = {
  title: 'Header/HeaderNavList',
  component: HeaderNavList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeaderNavList>

export const Default: Story = {
  args: {},
}

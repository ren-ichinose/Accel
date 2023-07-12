import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import AuthFood from './authFood'

const meta: Meta<typeof AuthFood> = {
  title: 'Auth/AuthFood',
  component: AuthFood,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AuthFood>

export const Default: Story = {
  args: { href: '*', text: '遷移先のリンクはこちら' },
}

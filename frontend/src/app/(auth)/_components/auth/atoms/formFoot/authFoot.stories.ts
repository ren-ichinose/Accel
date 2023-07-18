import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import AuthFoot from './authFoot'

const meta: Meta<typeof AuthFoot> = {
  title: 'Auth/AuthFoot',
  component: AuthFoot,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AuthFoot>

export const Default: Story = {
  args: { href: '*', text: '遷移先のリンクはこちら' },
}

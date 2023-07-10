import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import MainHeadBusinessName from './mainHeadBusinessName'

const meta: Meta<typeof MainHeadBusinessName> = {
  title: 'MainHead/MainHeadBusinessName',
  component: MainHeadBusinessName,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainHeadBusinessName>

export const Default: Story = {
  args: { businessName: '○○商事株式会社' },
}

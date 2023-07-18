import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import MainFoot from './mainFoot'

const meta: Meta<typeof MainFoot> = {
  title: 'MainFoot/MainFoot',
  component: MainFoot,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainFoot>

export const Default: Story = {
  args: {},
}

import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import BasicInfo from './basicInfo'

const meta: Meta<typeof BasicInfo> = {
  title: 'DocumentDetails/BasicInfo',
  component: BasicInfo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicInfo>

export const Default: Story = {
  args: {},
}

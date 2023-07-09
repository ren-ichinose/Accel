import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import IssuerInfo from './issuerInfo'

const meta: Meta<typeof IssuerInfo> = {
  title: 'DocumentDetails/IssuerInfo',
  component: IssuerInfo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IssuerInfo>

export const Default: Story = {
  args: {},
}

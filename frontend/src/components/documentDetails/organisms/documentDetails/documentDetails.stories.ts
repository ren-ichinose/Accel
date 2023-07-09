import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import DocumentDetails from './documentDetails'

const meta: Meta<typeof DocumentDetails> = {
  title: 'DocumentDetails/DocumentDetails',
  component: DocumentDetails,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentDetails>

export const Default: Story = {
  args: {},
}

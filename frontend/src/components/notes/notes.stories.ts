import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import Notes from './note'

const meta: Meta<typeof Notes> = {
  title: 'Notes/Notes',
  component: Notes,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Notes>

export const Default: Story = {
  args: {},
}

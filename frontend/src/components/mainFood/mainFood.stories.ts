import type { Meta, StoryObj } from '@storybook/react'
import 'src/styles/reset.css'
import 'src/styles/globals.css'
import MainFood from './mainFood'

const meta: Meta<typeof MainFood> = {
  title: 'MainFood/MainFood',
  component: MainFood,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MainFood>

export const Default: Story = {
  args: {},
}

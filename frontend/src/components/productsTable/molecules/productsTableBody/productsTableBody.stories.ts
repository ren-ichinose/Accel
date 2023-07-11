import type { Meta, StoryObj } from '@storybook/react';
import 'src/styles/reset.css';
import 'src/styles/globals.css';
import ProductsTableBody from './productsTableBody';

const meta: Meta<typeof ProductsTableBody> = {
  title: 'ProductsTable/ProductsTableBody',
  component: ProductsTableBody,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductsTableBody>;

export const Default: Story = {
  args: {},
};

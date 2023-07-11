import ProductsTableBody from '../../molecules/productsTableBody/productsTableBody';
import ProductsTableHeader from '../../molecules/productsTableHeader/productsTableHeader';
import styles from './productsTable.module.css';

export default function ProductsTable({
  register,
  control,
}: {
  register: any;
  control: any;
}) {
  return (
    <table className={styles.table}>
      <ProductsTableHeader />
      <ProductsTableBody register={register} control={control} />
    </table>
  );
}

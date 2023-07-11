'use client';

import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails';
import FinancialSummary from '@/components/financialSummary/financialSummary';
import MainFood from '@/components/mainFood/mainFood';
import Notes from '@/components/notes/notes';
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable';
import { useForm } from 'react-hook-form';

// import styles from './createInvoiceForm.module.css'

export default function CreateInvoiceForm() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    const invoiceProducts = data.invoiceProducts.map(
      (product: any, index: any) => ({ itemOrder: index, ...product })
    );
    const newData = { ...data, invoiceProducts };
    console.log(newData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DocumentDetails register={register} />
      <ProductsTable register={register} control={control} />
      <FinancialSummary />
      <Notes register={register} />
      <MainFood />
    </form>
  );
}

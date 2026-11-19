import React from 'react';
import {
  Product,
  Supplier,
  PurchaseTransaction,
  StoreBranding,
  UserProfile,
  DeviceInfo,
} from '../types/pos';
import { PurchaseWorkstation } from './PurchaseWorkstation';

interface NewPurchaseEntryPageProps {
  products: Product[];
  suppliers: Supplier[];
  purchases: PurchaseTransaction[];
  branding: StoreBranding;
  currentUser: UserProfile;
  currentDevice: DeviceInfo;
  onSavePurchase: (purchase: PurchaseTransaction, isEdit?: boolean) => void;
  onDeletePurchase?: (purchaseId: string) => void;
  onAddSupplier: (supplier: Supplier) => void;
  onOpenAddProduct: () => void;
  onOpenScanner: () => void;
  onNavigate: (page: string) => void;
  onUpdateBranding?: (branding: StoreBranding) => void;
}

export const NewPurchaseEntryPage: React.FC<NewPurchaseEntryPageProps> = ({
  products,
  suppliers,
  purchases,
  branding,
  currentUser,
  currentDevice,
  onSavePurchase,
  onDeletePurchase,
  onAddSupplier,
  onOpenAddProduct,
  onOpenScanner,
  onNavigate,
}) => {
  return (
    <PurchaseWorkstation
      variant="new"
      products={products}
      suppliers={suppliers}
      purchases={purchases}
      branding={branding}
      currentUser={currentUser}
      currentDevice={currentDevice}
      onSavePurchase={onSavePurchase}
      onDeletePurchase={onDeletePurchase}
      onAddSupplier={onAddSupplier}
      onOpenAddProduct={onOpenAddProduct}
      onOpenScanner={onOpenScanner}
      onNavigate={onNavigate}
    />
  );
};

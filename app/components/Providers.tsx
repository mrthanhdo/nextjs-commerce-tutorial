"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/stripe/error`}
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true} // Neu user reload lại page thì thông tin vẫn lưu trong giỏ hàng
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

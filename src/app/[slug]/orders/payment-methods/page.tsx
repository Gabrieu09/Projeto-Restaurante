"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { updatePaymentMethod } from "@/app/[slug]/menu/actions/update-payment-method";

export default function PaymentMethodsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const orderId = Number(searchParams.get("orderId"));

  async function handleSelectPayment(method: "CARD" | "PIX" | "VOUCHER") {
    if (!orderId) return;

    try {
      await updatePaymentMethod({
        orderId,
        paymentMethod: method,
      });

      router.push("/orders");
    } catch (error) {
      console.error("Erro ao atualizar método de pagamento:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen p-4">
      <h1 className="text-xl font-bold">Escolha o método de pagamento</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          className="w-full rounded-full"
          onClick={() => handleSelectPayment("CARD")}
        >
          Cartão
        </Button>
        <Button
          className="w-full rounded-full"
          onClick={() => handleSelectPayment("PIX")}
          variant="outline"
        >
          Pix
        </Button>
        <Button
          className="w-full rounded-full"
          onClick={() => handleSelectPayment("VOUCHER")}
          variant="ghost"
        >
          Voucher
        </Button>
      </div>
    </div>
  );
}
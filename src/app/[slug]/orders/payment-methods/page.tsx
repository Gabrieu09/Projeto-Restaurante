"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function PaymentMethodsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const consumptionMethod = searchParams.get("consumptionMethod");
  const cpf = searchParams.get("cpf");
  const orderId = searchParams.get("orderId");

  const handleSelectMethod = (method: string) => {
    console.log("Selecionado:", method);
    // Aqui você pode redirecionar ou fazer uma chamada para registrar o método
    // Exemplo:
    // router.push(`/pagamento/${orderId}?method=${method}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Escolha o meio de pagamento
      </h1>

      <p className="text-sm text-gray-500 mb-6 text-center">
        Pedido #{orderId} • CPF: {cpf} • Consumo: {consumptionMethod}
      </p>

      <div className="flex flex-col gap-4">
        <Button
          className="w-full text-left py-6 px-4 text-lg"
          onClick={() => handleSelectMethod("cartao")}
        >
          💳 Cartão de Crédito / Débito
        </Button>
        <Button
          className="w-full text-left py-6 px-4 text-lg"
          onClick={() => handleSelectMethod("voucher")}
        >
          📄 Voucher / Vale-refeição
        </Button>
        <Button
          className="w-full text-left py-6 px-4 text-lg"
          onClick={() => handleSelectMethod("pix")}
        >
          ⚡ Pix
        </Button>
      </div>
    </div>
  );
}
"use server";

import { db } from "@/lib/prisma";

interface UpdatePaymentMethodInput {
  orderId: number;
  paymentMethod: "CARD" | "PIX" | "VOUCHER";
}

export async function updatePaymentMethod({
  orderId,
  paymentMethod,
}: UpdatePaymentMethodInput) {
  await db.order.update({
    where: { id: orderId },
    data: {
      paymentMethod,
    },
  });
}
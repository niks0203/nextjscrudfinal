import { use } from "react";
import prisma from "../../../../lib/prisma";

export async function PUT(req, { params }) {
  const userID = params.id;
  const data = await req.json();
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(userID) },
    data,
  });
  return new Response(JSON.stringify(updatedUser));
}
export async function DELETE(req, { params }) {
  const userId = params.id;

  await prisma.user.delete({
    where: { id: parseInt(userId) },
  });
  return new Response(
    JSON.stringify({ message: `Deleted user with userId ${userId}` })
  );
}

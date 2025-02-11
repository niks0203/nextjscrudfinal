import prisma from "../../../lib/prisma";
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || 0;
  const perPage = searchParams.get("perPage") || 3;

  console.log("inside get function");
  console.log(page);
  console.log(perPage);

  const totalUsers = await prisma.user.count();
  const totalPages = Math.ceil(totalUsers / perPage);

  const users = await prisma.user.findMany({
    take: parseInt(perPage),
    skip: parseInt(page) * parseInt(perPage),
  });

  return new Response(
    JSON.stringify(
      { users, totalPages },
      { headers: { "Content-Type": "application/json" } }
    )
  );
}
export async function POST(req) {
  const data = await req.json();
  const newUser = await prisma.user.create({ data });
  console.log(JSON.stringify(newUser));
  return new Response(JSON.stringify(newUser));
}

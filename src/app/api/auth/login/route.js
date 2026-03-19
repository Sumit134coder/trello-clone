export const POST = async (request) => {
  const req = await request;
  console.log({ req });

  return Response.json({
    message: "This is a request",
  });
};

export const healthCheck = async (request: any, env: any) => {
  return new Response(
    JSON.stringify({ status: "UP", timestamp: new Date().toISOString() }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

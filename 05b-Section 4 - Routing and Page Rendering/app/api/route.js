export function GET(request) {
  return new Response("Hello World");
}

export function POST(request) {
  return new Response.json({ message: "Hello World" });
}

export function PUT(request) {
  return new Response.json({ message: "Hello World" });
}

export function DELETE(request) {
  return new Response.json({ message: "Hello World" });
}

export function PATCH(request) {
  return new Response.json({ message: "Hello World" });
}

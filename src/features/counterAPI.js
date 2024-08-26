export async function fetchCount(amount) {
  const response = await fetch(`/api/count?amount=${amount}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return { data: data.count };
}

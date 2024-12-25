const getFeedbackCount = async (id) => {
  const kv = await Deno.openKv();
  const store = await kv.get(["feedback", id]);
  return store?.value ?? 0;
};

const incrementFeedbackCount = async (id) => {
  const kv = await Deno.openKv();
  const count = await getFeedbackCount(id);
  await kv.set(["feedback", id], count + 1);
};

export { getFeedbackCount, incrementFeedbackCount };
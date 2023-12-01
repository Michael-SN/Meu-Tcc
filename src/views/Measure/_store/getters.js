export default {
  getMeasure: (state) => (id) => state.measures.find((m) => m.id === id),
};

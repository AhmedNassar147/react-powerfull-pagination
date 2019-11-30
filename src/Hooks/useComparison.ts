interface ComparableItem<T> {
  prev: T;
  next: T;
}

export default <T>(values: ComparableItem<T>[]): (boolean | T)[] => {
  let response: (boolean | T)[] = [];
  for (let index = 0; index < values.length; index++) {
    const { prev, next } = values[index];
    if (typeof prev === typeof next) {
      if (typeof prev === "object") {
        const isDiff = JSON.stringify(prev) !== JSON.stringify(next);
        response = [...response, isDiff && next];
      } else {
        response = [...response, prev !== next && next];
      }
    } else response = [...response, next];
  }

  return response;
};

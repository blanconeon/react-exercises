export function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

// The nextId variable is private to utilities.js, but every time you call generateId() (even from another file), it uses and updates that same nextId variable. This works because when you import and use generateId(), it still has access to the nextId in its own module scope. So, IDs remain unique across your app.
export {};

type EmptyFunc = (...args: unknown[]) => void

export type Tron = {
  log: EmptyFunc
  error: EmptyFunc
  warn: EmptyFunc
  display: EmptyFunc
}

declare global {
  interface Console {
    tron: Tron
  }
}

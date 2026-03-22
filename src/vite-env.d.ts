/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: unknown,
      vars?: { type?: string; linesClass?: string; [key: string]: unknown }
    );
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

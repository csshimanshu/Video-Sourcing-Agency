declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    lerp?: number;
    getDirection?: boolean;
    multiplier?: number;
    tablet?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: string | number | HTMLElement, options?: { offset?: number }): void;
  }
}

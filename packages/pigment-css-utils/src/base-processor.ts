import { BaseProcessor as WywBaseProcessor } from '@wyw-in-js/processor-utils';

/**
 * This is going to be expanded when the react package comes into picture.
 * Right now, it only has the bare mimimum.
 */
export default abstract class BaseProcessor extends WywBaseProcessor {
  abstract getBaseClass(): string | undefined;

  get asSelector(): string {
    const baseClass = this.getBaseClass();
    return `.${baseClass ?? this.className}`;
  }
}

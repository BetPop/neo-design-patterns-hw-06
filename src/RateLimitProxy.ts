import { IMessageService } from './IMessageService';

export class RateLimitProxy implements IMessageService {
  private lastSent: number = 0;

  constructor(
    private wrappee: IMessageService,
    private intervalMs: number
  ) {}

  send(message: string): void {
    const now = Date.now();
    if (now - this.lastSent >= this.intervalMs) {
      this.wrappee.send(message);
      this.lastSent = now;
    } else {
      console.log('[RateLimit] skipped');
    }
  }
}

export function createRateLimitProxy(
  wrappee: IMessageService,
  intervalMs: number
): IMessageService {
  return new RateLimitProxy(wrappee, intervalMs);
}

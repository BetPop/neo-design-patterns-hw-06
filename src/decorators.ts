export function withTimestamp(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (message: string) {
      const now = new Date();
      const timestamp = now.toISOString().replace('T', ' ').split('.')[0];
      const newMessage = `[${timestamp}] ${message}`;
      return originalMethod.call(this, newMessage);
    };
  };
}

export function uppercase(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (message: string) {
      const upper = message.toUpperCase();
      return originalMethod.call(this, upper);
    };
  };
}

export type MethodResponse<T> = {
  ok: boolean;
  errorMessage?: string;
  data?: T;
};

export type ActionResponse = {
  message: string;
  errors: Record<string, string[]>;
};

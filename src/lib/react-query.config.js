import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: true,
      throwOnError: false,
      gcTime: 30 * 60 * 1000,
      staleTime: 0,
    },
  },
});

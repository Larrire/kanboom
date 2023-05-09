export const boardKeys = {
  all: ['boards'] as const,
  // lists: () => [...boardKeys.all, 'list'] as const,
  // list: (filters: string) => [...boardKeys.lists(), { filters }] as const,
  details: () => [...boardKeys.all, 'detail'] as const,
  detail: (id: string) => [...boardKeys.details(), id] as const,
}
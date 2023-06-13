export const AvailableOptions = {
  SOCIAL: 'social',
  PROMOTIONAL: 'promotional'
} as const;
export type AvailableOption = (typeof AvailableOptions)[keyof typeof AvailableOptions];

export type ChosenOptions = {
  [AvailableOptions.SOCIAL]: boolean;
  [AvailableOptions.PROMOTIONAL]: boolean;
};

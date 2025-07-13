export const priorityInput = [
  { priority: 1, iconName: 'minus' },
  { priority: 2, iconName: 'chevronTop' },
  { priority: 3, iconName: 'twoArrow' },
];

export const initialFormState = {
  id: '',
  priority: 1,
  title: '',
  createdAt: '',
  updatedAt: '',
};

export const filterOptions = [
  { label: 'Приоритету', iconName: 'fromUnimportant' },
  { label: 'Приоритету', iconName: 'ofImportance' },
  { label: 'Алфавиту', iconName: 'sortAlphaAsc' },
  { label: 'Алфавиту', iconName: 'sortAlphaDesc' },
  { label: 'Дате создания', iconName: 'moreToLess' },
  { label: 'Дате создания', iconName: 'lessToMore' },
  { label: 'Дате обновления', iconName: 'newOld' },
  { label: 'Дате обновления', iconName: 'oldNew' },
];

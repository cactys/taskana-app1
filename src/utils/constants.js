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
  {
    label: 'Приоритету',
    value: 'priority:asc',
    iconName: 'fromUnimportant',
    mode: 'radio',
  },
  {
    label: 'Приоритету',
    value: 'priority:desc',
    iconName: 'ofImportance',
    mode: 'radio',
  },
  {
    label: 'Алфавиту',
    value: 'title:asc',
    iconName: 'sortAlphaAsc',
    mode: 'radio',
  },
  {
    label: 'Алфавиту',
    value: 'title:desc',
    iconName: 'sortAlphaDesc',
    mode: 'radio',
  },
  {
    label: 'Дате создания',
    value: 'createdAt:asc',
    iconName: 'moreToLess',
    mode: 'radio',
  },
  {
    label: 'Дате создания',
    value: 'createdAt:desc',
    iconName: 'lessToMore',
    mode: 'radio',
  },
  {
    label: 'Дате обновления',
    value: 'updatedAt:asc',
    iconName: 'newOld',
    mode: 'radio',
  },
  {
    label: 'Дате обновления',
    value: 'updatedAt:desc',
    iconName: 'oldNew',
    mode: 'radio',
  },
];

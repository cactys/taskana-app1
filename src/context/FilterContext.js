import { createContext } from 'react';

/**
 * Контекст фильтра для управления состоянием и логикой фильтрации в приложении.
 * По умолчанию имеет значение null и должен быть предоставлен провайдером.
 */
const FilterContext = createContext(null);

export default FilterContext;

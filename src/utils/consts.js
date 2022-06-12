const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 480;
const SAVED_MOVIES_STOREGE = 'savedMovies';
const MOVIES_STOREGE = 'movies';
const SEARCH_STRING_STORAGE = 'searchStringStorage';
const SWITCH_STORAGE = 'switchStorage';
const SHORT_FILMS = 40;
const NOT_FOUND_ERR_TEXT = `Ничего не найдено`;
const SAVED_ERR_API_TEXT = 'Сохраненые фильмы отсутствуют';
const SAVE_FILM_ERR_TEXT = 'Ошибка при сохранении фильма';
const DELETE_ERROR = 'Ошибка при удалении фильма';
const KEY_WORD_ERROR = 'Нужно ввести ключевое слово (название, режиссер, страна или год)';
const NOT_FOUND_ERR_BLOCK = <p className='error-message'>{NOT_FOUND_ERR_TEXT}</p>;
const SAVED_FILMS_API_BLOCK = <p className='error-message'>{SAVED_ERR_API_TEXT}</p>;
const BAD_REQUEST = 'Некорректные данные';
const DEFAULT_ERROR = 'Что-то пошло не так! Попробуйте ещё раз.';

export {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
  SAVED_MOVIES_STOREGE,
  MOVIES_STOREGE,
  SEARCH_STRING_STORAGE,
  SWITCH_STORAGE,
  SHORT_FILMS,
  SAVE_FILM_ERR_TEXT,
  KEY_WORD_ERROR,
  DELETE_ERROR,
  SAVED_ERR_API_TEXT,
  NOT_FOUND_ERR_TEXT,
  NOT_FOUND_ERR_BLOCK,
  SAVED_FILMS_API_BLOCK,
  BAD_REQUEST,
  DEFAULT_ERROR,
}

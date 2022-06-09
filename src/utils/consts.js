const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 480;
const SAVED_MOVIES_STOREGE = 'savedMoviesStorage';
const MOVIES_STOREGE = 'moviesStorage';
const SHORT_FILMS = 40
const NOT_FOUND_ERR_TEXT = `Ничего не найдено`;
const SAVED_FILMS_API_TEXT = 'Невозможно прочитать сохраненные фильмы';
const SAVE_FILM_ERR_TEXT = 'Ошибка при сохранении/удалении фильма';
const KEY_WORD_ERROR = 'Нужно ввести ключевое слово (название, режиссер, страна или год)';
const DELETE_ERROR = 'Ошибка при удалении карточки';
const NOT_FOUND_ERR_BLOCK = <p className='error-message'>{NOT_FOUND_ERR_TEXT}</p>;
const SAVED_FILMS_API_BLOCK = <p className='error-message'>{SAVED_FILMS_API_TEXT}</p>;


export {
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  MOBILE_WIDTH,
  SAVED_MOVIES_STOREGE,
  MOVIES_STOREGE,
  SHORT_FILMS,
  SAVE_FILM_ERR_TEXT,
  KEY_WORD_ERROR,
  DELETE_ERROR,
  NOT_FOUND_ERR_BLOCK,
  SAVED_FILMS_API_BLOCK,
}

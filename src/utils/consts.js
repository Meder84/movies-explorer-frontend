
const NOT_FOUND_ERR_TEXT = `Ничего не найдено`;
const SAVED_FILMS_API_TEXT = 'Невозможно прочитать сохраненные фильмы';
const SAVE_FILM_ERR_TEXT = 'Ошибка при сохранении/удалении фильма';

const KEY_WORD_ERROR = 'Нужно ввести ключевое слово (название, режиссер, страна или год)';
const DELETE_ERROR = 'Ошибка при удалении карточки';

const NOT_FOUND_ERR_BLOCK = <p className="list__no-result">{NOT_FOUND_ERR_TEXT}</p>;
const SAVED_FILMS_API_BLOCK = <p className="list__no-result">{SAVED_FILMS_API_TEXT}</p>;

const SHORT_FILM_DURATION = 40;

export {
  NOT_FOUND_ERR_TEXT,
  SAVE_FILM_ERR_TEXT,
  KEY_WORD_ERROR,
  DELETE_ERROR,
  NOT_FOUND_ERR_BLOCK,
  SAVED_FILMS_API_BLOCK,
  SHORT_FILM_DURATION,
}

// export const SHORT_MOVIE_DURATION_MIN = 40;

// export const DESKTOP_WIDTH = 1280;

// export const TABLET_WIDTH = 768;

// export const MOBILE_WIDTH = 480;

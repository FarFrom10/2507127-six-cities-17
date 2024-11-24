import { BookmarkSettings } from './bookmark-settings';


type BookmarkButtonProps = {
  bookmarkClass: string;
}

function BookmarkButton({bookmarkClass}: BookmarkButtonProps): JSX.Element{
  return (
    <button className={`${bookmarkClass}__bookmark-button button`} type="button">
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkSettings[bookmarkClass].width} height={BookmarkSettings[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;

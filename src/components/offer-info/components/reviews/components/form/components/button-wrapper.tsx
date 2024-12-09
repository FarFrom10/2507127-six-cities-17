import Button from './button';

function ButtonWrapper():JSX.Element {
  return(
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
                  To submit review please make sure to set{' '}
        <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
        <b className="reviews__text-amount">50 characters</b>.
      </p>
      <Button/>
    </div>
  );
}

export default ButtonWrapper;
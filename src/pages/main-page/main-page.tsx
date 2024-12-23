import LocationsList from '../../components/locations-list/locations-list';
import Header from '../../components/header/header';
import { PagesList } from '../../const';
import Title from '../../components/title/title';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Cities from '../../components/cities/cities';
import { getFilteredOffers } from '../../utils/offers';
import cn from 'classnames';
import { sortOffers } from '../../utils/sort';
import { useEffect } from 'react';
import { changeActiveOfferId } from '../../store/action';


function MainPage(): JSX.Element{
  const dispatch = useAppDispatch();
  //Сброс выбранного id. Ранее, при возврате со страницы offer, выбранный id отсавался в глобальном состоянии
  useEffect(() =>{
    dispatch(changeActiveOfferId(null));
  });

  const currentCity = useAppSelector((state) => state.currentCity);
  const currentSort = useAppSelector((state) => state.currentSortOffers);

  const offers = useAppSelector((state) => state.offers);
  const filteredOFfers = getFilteredOffers(offers, currentCity);
  const sortedOffers = sortOffers(filteredOFfers, currentSort);

  return (
    <div className="page page--gray page--main">
      <Title pageName={PagesList.Main}/>
      <Header/>
      <main className={cn(
        'page__main',
        'page__main--index',
        {'page__main--index-empty': !sortedOffers.length}
      )}
      >
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList currentCity={currentCity} />
        <Cities filteredOFfers={sortedOffers} currentCity={currentCity}/>
      </main>
    </div>
  );
}

export default MainPage;

import LocationsList from '../../components/locations/locations-list/locations-list';
import Map from '../../components/common/map/map';
import PlaceCardsList from '../../components/place-cards/place-cards-list/place-cards-list';
import PlacesSortForm from '../../components/place-cards/places-sort-form/places-sort-form';
import HeaderGeneral from '../../components/header/header-general/header-general';

type MainPageProps = {
  cardsCount: number;
  offersCount: number;
}

type FoundPlacesNumber = {
  offersCount: number;
}

function FoundPlacesNumber({offersCount}: FoundPlacesNumber):JSX.Element{
  return (
    <b className="places__found">{offersCount} places to stay in Amsterdam</b>
  );
}

function MainPage({cardsCount, offersCount}: MainPageProps): JSX.Element{
  return (
    <div className="page page--gray page--main">
      <HeaderGeneral/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <FoundPlacesNumber offersCount={offersCount}/>
              {<PlacesSortForm/>}
              {<PlaceCardsList cardsCount={cardsCount}/>}
            </section>
            <div className="cities__right-section">
              <Map mapClass='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

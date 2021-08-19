import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <div>
      <header>
        React meals
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="food table tasty" />
      </div>
    </div>
  );
};

export default Header;

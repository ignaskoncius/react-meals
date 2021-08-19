import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        React meals
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="food table tasty" />
      </div>
    </div>
  );
};

export default Header;

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <div>
      <header className={classes.header}>
        React meals
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="food table tasty" />
      </div>
    </div>
  );
};

export default Header;

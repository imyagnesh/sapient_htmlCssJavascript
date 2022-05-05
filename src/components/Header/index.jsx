import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../../assets/icons/shopping_cart.svg';

function Header() {
  return (
    <header className="flex p-8 shadow-md">
      <div>
        <div>LOGO</div>
      </div>
      <div className="flex-1 block md:hidden" />
      <nav className="flex-1 px-4 hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <div className="hidden md:block">Sign In</div>
        <div className="hidden md:block">Register</div>
        <div className="flex gap-2">
          <div className="sr-only">Cart</div>
          <ShoppingCartIcon height={24} width={24} fill="green" />
          <span>0 Items</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

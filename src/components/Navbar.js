import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const Navbar = () => {
  return (
    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;
      console.log(isLightTheme);
      return (
        <nav style={{background: theme.ui, color: theme.syntax }}>
          Navbar
        </nav>
      );
    }}
    </ThemeContext.Consumer>
  );
}

export default Navbar;

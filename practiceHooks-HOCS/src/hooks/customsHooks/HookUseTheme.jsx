import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

export const HookUseTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>useTheme</h1>
      <button onClick={toggleTheme}>change theme</button>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
        repudiandae qui a illo quos quisquam ratione nesciunt nulla placeat,
        doloremque sapiente obcaecati rerum deleniti aspernatur minus odit, cum
        nobis quaerat.
      </p>
    </div>
  );
};

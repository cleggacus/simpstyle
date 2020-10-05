import Theme from '../interfaces/theme';

export default (theme: Theme) => {
  document.documentElement.style.setProperty('--bg-primary',    theme.colors.bgPrimary);
  document.documentElement.style.setProperty('--bg-secondary',  theme.colors.bgSecondary);
  document.documentElement.style.setProperty('--bg-tertiary',   theme.colors.bgTertiary);

  document.documentElement.style.setProperty('--fg-primary',    theme.colors.fgPrimary);
  document.documentElement.style.setProperty('--fg-secondary',  theme.colors.fgSecondary);
  document.documentElement.style.setProperty('--fg-tertiary',   theme.colors.fgTertiary);

  document.documentElement.style.setProperty('--bg-navbar',     theme.colors.bgNavbar);
  document.documentElement.style.setProperty('--fg-navbar',     theme.colors.fgNavbar);

  document.documentElement.style.setProperty('--bg-content',     theme.colors.bgContent);
  document.documentElement.style.setProperty('--fg-content',     theme.colors.fgContent);

  document.documentElement.style.setProperty('--box-shadow',     theme.colors.boxShadow);
  document.documentElement.style.setProperty('--border-width',     theme.colors.borderWidth);
  document.documentElement.style.setProperty('--border-color',     theme.colors.borderColor);
}
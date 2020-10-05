export default interface Theme{
  title: string;

  colors: {
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
  
    fgPrimary: string;
    fgSecondary: string;
    fgTertiary: string;
    
    bgNavbar: string;
    fgNavbar: string;
    
    bgContent: string;
    fgContent: string;

    boxShadow: string;
    borderWidth: string;
    borderColor: string;
  }
}
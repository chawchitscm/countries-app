export interface Country {
  name: {
    common: string,
    official: string,
    nativeName: {
      swe: {
          official: string,
          common: string
      }
    }
  }
  flags: {
    png: string,
    svg: string
  }
  population: number
  region: string
  capital: Array
  alpha3Code: string
  [extra]: string | number | object | Array
}
  
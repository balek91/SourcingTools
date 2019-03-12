export const countryOptions = [
  { value: 'Inde', label: 'Inde' },
  { value: 'France', label: 'France' },
  { value: 'Angleterre', label: 'Angleterre' },
  { value: 'Espagne', label: 'Espagne' },
  { value: 'Italie', label: 'Italie' },
]

export const serviceOptions = [
  { value: 'PortCall', label: 'PortCall' },
  { value: 'Helicopter', label: 'Helicopter' }
]

export const estimate = [
  { id: 1, port: 'Lerwick', country: 'UK', currency: 'Dollar', service: 'PortCall' },
  { id: 26, port: 'Lerwick', country: 'UK', currency: 'Dollar', service: 'Helicopter' },
  { id: 2, port: 'Aberdeen', country: 'UK', currency: 'Dollar', service: 'PortCall' },
  { id: 3, port: 'Nouakchott', country: 'Mauritania', currency: 'Dollar', service: 'PortCall' },
  { id: 4, port: 'Dakar', country: 'Senegal', currency: 'Dollar', service: 'Helicopter' },
  { id: 5, port: 'Walvis Bay', country: 'Namibia', currency: 'Dollar', service: 'PortCall' },
  { id: 6, port: 'Soyo', country: 'Angola', currency: 'Dollar', service: 'PortCall' },
  { id: 7, port: 'Luanda', country: 'Angola', currency: 'Dollar', service: 'PortCall' },
  { id: 8, port: 'Beira', country: 'Mozambique', currency: 'Dollar', service: 'PortCall' },
  { id: 9, port: 'Tampico', country: 'Mexico', currency: 'Dollar', service: 'PortCall' },
  { id: 10, port: 'Vitoria', country: 'Brazil', currency: 'Dollar', service: 'Helicopter' },
  { id: 11, port: 'Rio', country: 'Brazil', currency: 'Dollar', service: 'PortCall' },
  { id: 12, port: 'Galvestone', country: 'USA', currency: 'Dollar', service: 'PortCall' },
  { id: 13, port: 'Fourchon', country: 'USA', currency: 'Dollar', service: 'PortCall' },
  { id: 14, port: 'Kuching', country: 'Malaysia', currency: 'Dollar', service: 'Helicopter' },
  { id: 15, port: 'Bintulu', country: 'Malaysia', currency: 'Dollar', service: 'PortCall' },
  { id: 16, port: 'Dampier', country: 'Australia', currency: 'Dollar', service: 'PortCall' },
  { id: 17, port: 'Melbourne', country: 'Australia', currency: 'Dollar', service: 'PortCall' },
  { id: 18, port: 'Stavanger', country: 'Norway', currency: 'Dollar', service: 'PortCall' },
  { id: 19, port: 'Bergen', country: 'Norway', currency: 'Dollar', service: 'PortCall' },
  { id: 20, port: 'Dunkerque', country: 'France', currency: 'Dollar', service: 'PortCall' },
  { id: 21, port: 'Amsterdam', country: 'Netherlands', currency: 'Dollar', service: 'Helicopter' },
  { id: 25, port: 'Amsterdam', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 22, port: 'Ijmuiden', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 23, port: 'Den Helder', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 24, port: 'Singapore', country: 'Singapore', currency: 'Dollar', service: 'PortCall' }
]
export const estimateTest = [
  { id: 1, port: 'Fakedata', country: 'FAKE', currency: 'Dollar' }
]
export const unitCostValidate = [
  { id: 1, name: 'UnitCost1', value: 100, tax: 0, fee: 40, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost it's test for lenght`, categorie: 'Categorie1' },
  { id: 2, name: 'UnitCost2', value: 200, tax: 10, fee: 30, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie1' },
  { id: 15, name: 'UnitCost3', value: 300, tax: 20, fee: 20, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie2' },
  { id: 4, name: 'UnitCost4', value: 400, tax: 30, fee: 10, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie2' },
  { id: 5, name: 'UnitCost5', value: 500, tax: 40, fee: 0, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie1' }
]

export const unitCostAwaiting = [
  { id: 6, name: 'UnitCost6', value: 100, tax: 0, fee: 40, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost it's test for lenght`, categorie: 'Categorie2' },
]

export const estimation = {
  estimationId: 1,
  estimationLocation: 'Dunkerque',
  estimationService: 'Port Call',
  listUnitCost: [
    { id: 1, name: 'UnitCost1', value: 100, tax: 0, fee: 40, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost it's test for lenght`, categorie: 'Categorie1' },
    { id: 2, name: 'UnitCost2', value: 200, tax: 10, fee: 30, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie1' },
    { id: 15, name: 'UnitCost3', value: 300, tax: 20, fee: 20, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie2' },
    { id: 4, name: 'UnitCost4', value: 400, tax: 30, fee: 10, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie2' },
    { id: 5, name: 'UnitCost5', value: 500, tax: 40, fee: 0, unit: 'DAY', unitCost: 'DAY', description: `it's an unitCost`, categorie: 'Categorie1' }
  ],
  currency: '€',
  tax: 100,
  fee: 100,
  value: 1500,
  total: 1700
}
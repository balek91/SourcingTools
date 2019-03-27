export const countryOptions = [
  { id: 1, value: 'Inde', label: 'Inde' },
  { id: 2, value: 'France', label: 'France' },
  { id: 3, value: 'Angleterre', label: 'Angleterre' },
  { id: 4, value: 'Espagne', label: 'Espagne' },
  { id: 5, value: 'Italie', label: 'Italie' },
]

export const locationOptions = [
  { id: 1, value: 'Lerwick', label: 'Lerwick - UK', country: 'UK', currency: 'US Dollar' },
  { id: 2, value: 'Aberdeen', label: 'Aberdeen - UK', country: 'UK', currency: 'US Dollar' },
  { id: 3, value: 'Nouakchott', label: 'Nouakchott - Mauritania', country: 'Mauritania', currency: 'US Dollar' },
  { id: 4, value: 'Luanda', label: 'Luanda - Angola', country: 'Angola', currency: 'US Dollar' },
  { id: 5, value: 'Fourchon', label: 'Fourchon - USA', country: 'USA', currency: 'US Dollar' },
]

export const serviceOptions = [
  { id: 1, value: 'Port Call', label: 'Port Call' },
  { id: 2, value: 'Helicopter', label: 'Helicopter' }
]

export const currencyOptions = [
  { id: 1, value: 'Euro', label: 'Euro - EUR' },
  { id: 2, value: 'US Dollar', label: 'US Dollar - USD' },
  { id: 3, value: 'Algerian Dinar', label: 'Algerian Dinar - DZD' },
  { id: 4, value: 'Pound Sterling', label: 'Pound Sterling - GBP' }
]

export const unitOptions = [
  { id: 1, value: 'Day', label: 'Day' },
  { id: 2, value: 'Person', label: 'Person' },
  { id: 3, value: 'Meter', label: 'Meter' }
]

export const unitCostOptions = [
  { id: 1, value: 'Day/Person', label: 'Day/Person' },
  { id: 2, value: 'Meter/Day', label: 'Meter/Day' }
]

export const categorieOptions = [
  { id: 1, value: 'Categorie', label: 'Categorie' },
  { id: 2, value: 'Categorie1', label: 'Categorie1' },
  { id: 3, value: 'Categorie2', label: 'Categorie2' },
  { id: 4, value: 'Categorie3', label: 'Categorie3' }
]

export const referentialTypeOptions = [
  { id: 1, value: 'Country', label: 'Country' },
  { id: 2, value: 'Currency', label: 'Currency' },
  { id: 3, value: 'Service', label: 'Service' },
  { id: 4, value: 'Unit', label: 'Unit' },
  { id: 5, value: 'Categorie', label: 'Categorie' }
]

export const referentialOptions = [
  { id: 1, value: 'France', type: 'Country' },
  { id: 2, value: 'Angleterre', type: 'Country' },
  { id: 3, value: 'Port Call', type: 'Service' },
  { id: 4, value: 'Helicopter', type: 'Service' },
  { id: 5, value: 'Euro', type: 'Currency' },
  { id: 1, value: 'US Dollar', type: 'Currency' },
  { id: 2, value: 'DAY', type: 'Unit' },
  { id: 3, value: 'Person', type: 'Unit' },
  { id: 4, value: 'Categorie 1', type: 'Categorie' },
  { id: 5, value: 'Categorie 2', type: 'Categorie' }
]



export const estimate = [
  { id: 1, location: 'Lerwick', country: 'UK', currency: 'Dollar', service: 'PortCall' },
  { id: 26, location: 'Lerwick', country: 'UK', currency: 'Dollar', service: 'Helicopter' },
  { id: 2, location: 'Aberdeen', country: 'UK', currency: 'Dollar', service: 'PortCall' },
  { id: 3, location: 'Nouakchott', country: 'Mauritania', currency: 'Dollar', service: 'PortCall' },
  { id: 4, location: 'Dakar', country: 'Senegal', currency: 'Dollar', service: 'Helicopter' },
  { id: 5, location: 'Walvis Bay', country: 'Namibia', currency: 'Dollar', service: 'PortCall' },
  { id: 6, location: 'Soyo', country: 'Angola', currency: 'Dollar', service: 'PortCall' },
  { id: 7, location: 'Luanda', country: 'Angola', currency: 'Dollar', service: 'PortCall' },
  { id: 8, location: 'Beira', country: 'Mozambique', currency: 'Dollar', service: 'PortCall' },
  { id: 9, location: 'Tampico', country: 'Mexico', currency: 'Dollar', service: 'PortCall' },
  { id: 10, location: 'Vitoria', country: 'Brazil', currency: 'Dollar', service: 'Helicopter' },
  { id: 11, location: 'Rio', country: 'Brazil', currency: 'Dollar', service: 'PortCall' },
  { id: 12, location: 'Galvestone', country: 'USA', currency: 'Dollar', service: 'PortCall' },
  { id: 13, location: 'Fourchon', country: 'USA', currency: 'Dollar', service: 'PortCall' },
  { id: 14, location: 'Kuching', country: 'Malaysia', currency: 'Dollar', service: 'Helicopter' },
  { id: 15, location: 'Bintulu', country: 'Malaysia', currency: 'Dollar', service: 'PortCall' },
  { id: 16, location: 'Dampier', country: 'Australia', currency: 'Dollar', service: 'PortCall' },
  { id: 17, location: 'Melbourne', country: 'Australia', currency: 'Dollar', service: 'PortCall' },
  { id: 18, location: 'Stavanger', country: 'Norway', currency: 'Dollar', service: 'PortCall' },
  { id: 19, location: 'Bergen', country: 'Norway', currency: 'Dollar', service: 'PortCall' },
  { id: 20, location: 'Dunkerque', country: 'France', currency: 'Dollar', service: 'PortCall' },
  { id: 21, location: 'Amsterdam', country: 'Netherlands', currency: 'Dollar', service: 'Helicopter' },
  { id: 25, location: 'Amsterdam', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 22, location: 'Ijmuiden', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 23, location: 'Den Helder', country: 'Netherlands', currency: 'Dollar', service: 'PortCall' },
  { id: 24, location: 'Singapore', country: 'Singapore', currency: 'Dollar', service: 'PortCall' }
]
export const estimateTest = [
  { id: 1, port: 'Fakedata', country: 'FAKE', currency: 'Dollar' }
]
export const unitCostValidate = [
  { id: 1, name: 'UnitCost1', value: 100, tax: 0, fee: 40, unit: 'DAY', quantity: 1, description: `it's an unitCost it's test for lenght`, categorie: 'Categorie1' },
  { id: 2, name: 'UnitCost2', value: 200, tax: 10, fee: 30, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie1' },
  { id: 15, name: 'UnitCost3', value: 300, tax: 20, fee: 20, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie2' },
  { id: 4, name: 'UnitCost4', value: 400, tax: 30, fee: 10, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie2' },
  { id: 5, name: 'UnitCost5', value: 500, tax: 40, fee: 0, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie1' }
]

export const unitCostAwaiting = [
  { id: 6, name: 'UnitCost6', value: 100, tax: 0, fee: 40, unit: 'DAY', quantity: 1, description: `it's an unitCost it's test for lenght`, categorie: 'Categorie2' },
]

export const estimation = {
  estimationId: 1,
  estimationLocation: 'Dunkerque',
  estimationService: 'Port Call',
  listUnitCost: [
    { id: 1, name: 'UnitCost1', value: 100, tax: 0, fee: 40, unit: 'DAY', quantity: 1, description: `it's an unitCost it's test for lenght`, categorie: 'Categorie1' },
    { id: 2, name: 'UnitCost2', value: 200, tax: 10, fee: 30, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie1' },
    { id: 15, name: 'UnitCost3', value: 300, tax: 20, fee: 20, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie2' },
    { id: 4, name: 'UnitCost4', value: 400, tax: 30, fee: 10, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie2' },
    { id: 5, name: 'UnitCost5', value: 500, tax: 40, fee: 0, unit: 'DAY', quantity: 1, description: `it's an unitCost`, categorie: 'Categorie1' }
  ],
  currency: '€',
  tax: 100,
  fee: 100,
  value: 1500,
  total: 1700
}
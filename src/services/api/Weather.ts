import { api, API_KEY } from '.';

export interface ICidadeDados {
  date: number;
  date_iso: string;
  lat: number;
  lon: number;
  value: number;
}

export interface ICidade {
  nome: string;
  lat: string;
  lng: string;
}

export const WeatherService = {
  ListaInfosCidadeAtual: async (cidade: ICidade) => {
    return api.get<ICidadeDados>(
      `uvi?lat=${cidade.lat}&lon=${cidade.lng}&appid=${API_KEY}`,
    );
  },

  ListaInfosCidadePrevisao: async (cidade: ICidade) => {
    return api.get<ICidadeDados[]>(
      `uvi/forecast?lat=${cidade.lat}&lon=${cidade.lng}&appid=${API_KEY}`,
    );
  },

  ListaCidades: (): ICidade[] => {
    return [
      {
        nome: 'Brasília',
        lat: '-15.7751885',
        lng: '-48.3575891',
      },
      {
        nome: 'Santos',
        lat: '-23.9549779',
        lng: '-46.4147151',
      },
      {
        nome: 'Guarujá',
        lat: '-23.9438831',
        lng: '-46.2985608',
      },
      {
        nome: 'Praia Grande',
        lat: '-24.0368825',
        lng: '-46.6421176',
      },
      {
        nome: 'São Vicente',
        lat: '-23.9541666',
        lng: '-46.5010775',
      },
      {
        nome: 'Itanhaém',
        lat: '-24.1751473',
        lng: '-46.9702631',
      },
      {
        nome: 'Peruíbe',
        lat: '-24.3296877',
        lng: '-47.1558979',
      },
      {
        nome: 'México',
        lat: '22.4887639',
        lng: '-120.8802963',
      },
      {
        nome: 'Reino Unido',
        lat: '53.2208773',
        lng: '-22.223376',
      },
    ];
  },
};

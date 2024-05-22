// /app/services/weather.interface.ts

export interface Weather {
    weather: Array<{
      description: string;
      icon: string;
      main: string;
    }>;
    main: {
      temp: number;
    };
    name: string;
  }
  
export interface IAssets {
    id: number;
    sensors: [];
    model: string;
    status: string;
    healthscore: number;
    name: string;
    image: string;
    specifications: {};
    metrics: {
        totalCollectsUptime: number;
        totalUptime: number;
        lastUptimeAt: string;
    };
    unitId: number;
    companyId: number;
    }


interface launchCore {
    land_success: boolean;
}
export class LaunchModel {
    flight_number: string;
    mission_name: string;
    mission_id: string[];
    launch_year: string;
    launch_success: boolean;
    rocket: {
        first_stage: {
            cores: launchCore[];
        }
    }

    constructor() {}
}
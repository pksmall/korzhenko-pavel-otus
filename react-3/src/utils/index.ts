export const convertWindDirectionToString = (degrees: number): string => {
    let direction = "N/A";
    if (
        (degrees >= 0 && degrees < 22.5) ||
        (degrees > 337.5 && degrees < 360)
    ) {
        direction = "E";
    } else if (degrees >= 22.5 && degrees < 67.5) {
        direction = "NE";
    } else if (degrees >= 67.5 && degrees < 112.5) {
        direction = "N";
    } else if (degrees >= 112.5 && degrees < 157.5) {
        direction = "NW";
    } else if (degrees >= 157.5 && degrees < 202.5) {
        direction = "W";
    } else if (degrees >= 202.5 && degrees < 247.5) {
        direction = "SW";
    } else if (degrees >= 247.5 && degrees < 292.5) {
        direction = "S";
    } else if (degrees >= 292.5 && degrees < 337.5) {
        direction = "SE";
    }
    return direction;
};

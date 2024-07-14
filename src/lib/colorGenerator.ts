import { colors } from '@/app/theme/constants';
import chroma from 'chroma-js';

const PRESET_COLORS = [
    "#C70833",
    "#E53E3E",
    "#F6AD55",
    "#F6E05E",
    "#48BB78",
    "#4FD1C5",
    "#4299E1",
    "#0BC5EA",
    "#805AD5",
    "#D53F8C",
    "#718096",
];
const DEFAULT_USER_COLOR_STRING = PRESET_COLORS[0];
const LIGHTNESS_MAP = [
    0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15, 0.05,
];
const SATURATION_MAP = [
    0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32,
];

const getColorNumber = (index: number) => index === 0 ? 50 : index * 100;

const generateColor = (userColorInput: string) => {
    const colorChroma = chroma.valid(userColorInput) ? chroma(userColorInput) : DEFAULT_USER_COLOR_STRING;
    const lightnessGoal = colorChroma.get("hsl.l");
    const closestLightness = LIGHTNESS_MAP.reduce((prev, curr) =>
        Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal)
            ? curr
            : prev,
    );
    const baseColorIndex = LIGHTNESS_MAP.findIndex(
        (l) => l === closestLightness,
    );

    const colors = LIGHTNESS_MAP.map((l) =>
        colorChroma.set("hsl.l", l),
    )
        .map((color) => chroma(color))
        .map((color, i) => {
            const saturationDelta =
                SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
            return saturationDelta >= 0
                ? {
                    color: color.saturate(saturationDelta)?.hex(),
                    number: getColorNumber(i)
                } :
                {
                    color: color.desaturate(saturationDelta * -1)?.hex(),
                    number: getColorNumber(i)
                }
        });

    return {colors, baseColorIndex}
}


const generateColorRange = (primaryColor: string, secondaryColor: string) => {
    const primaryColors = generateColor(primaryColor.length ? primaryColor : colors.primary.DEFAULT)
    const secondaryColors = generateColor(secondaryColor.length ? secondaryColor : colors.button.DEFAULT)

    const primaryColorMap: Record<string, any> = {};
    const secondaryColorMap: Record<string, any> = {};

    primaryColors.colors.forEach((item, index) => {
        primaryColorMap[item.number] = item.color;
        if (primaryColors.baseColorIndex === index) {
            primaryColorMap['default'] = item.color;
        }
    });

    secondaryColors.colors.forEach((item, index) => {
        secondaryColorMap[item.number] = item.color;
        if (secondaryColors.baseColorIndex === index) {
            secondaryColorMap['default'] = item.color;
        }
    });

    return {
        primary: primaryColorMap,
        secondary: secondaryColorMap
    };
}

export default generateColorRange

export const ColorsCustom: ColorsCustomType<string> = {
    // bottom tab bar
    white: '#ffffff',
    white_07: 'rgba(255,255,255,0.7)',
    white_08: 'rgba(255,255,255,0.8)',
    white_09: 'rgba(255, 255, 255, 0.9)',
    purple: '#403572',
    light_purple: '#F6F5FB',
    cured: "#18ff15",
    // ////////////////////////////////////////////////////////////////////////////////
    // NOTE: THE BELOW COLOR MAY NOT RELATED TO YOUR REBRANDING & NOT COMMON STYLE
    // ////////////////////////////////////////////////////////////////////////////////
    // login screen color
    login: {
        facebook: "#3b5998",
        google: "#d34836",
        sms: "#5BC236",
    },
    category: {
        main_category: '#B1B1B1',
        sub_category: "#000000",
        sub_category_2: "#000000"
    },
    // common
    error: "#f44336",
    accent: "#FFC107",
    accentLight: "#FFD54F",
    black_text_primary: "rgba(0,0,0,1)",
    black: "#000000",
    background: "white",
    // Text
    Text: "#333",
    spin: "#333333",
    dashboard: {
        summary: {
            green: "#479696",
            light_green: "#F5F9F9",
            purple: '#403572',
            light_purple: '#F6F5FB',
            red: "rgb(246,108,105)",
            light_red: '#FFF4F4',
        },
    },
    chart: {
        background: "#A6CEE3",
        orange: "#F7CD42",
        blue_white: "#5DC4E5",
        blue: "#458DFB",
        purple_white: "#BB51D0",
        green: "#ADCD54",
        purple: "#3E00A4",
        lime_green: "#3ebf62",
        cyan: "cyan"
    },
    light_grey: "#B1B1B1",
    very_light_grey: "#eeeeee",
    dark_orange: "rgba(255, 132, 11, 1)",
    dark_yellow: "rgba(255, 164, 31, 1)",
    yellow: "rgba(255, 198, 53, 1)",
    dark_red: "#8B0000",
    red: "#ff0000",
    green: "#2AB5B3",
    light_green: "#F5F9F9",
    blue: "#0091ea",
    light_blue: "#9ddaff",
    blue1: "rgba(30, 165, 233, 1)",
    blue2: "rgba(3, 207, 254, 1)",
    starRating: "#FDF12C",
    background_flash_sales: ["rgba(6, 188, 198, 1)", "rgba(244, 244, 246, 0.9)"],
    light_red: 'rgb(246,108,105)',
    very_light_red: '#FFF4F4',
    very_light_green: "#eaffeb",
    lime_green: "#3ebf62",
    grey: 'grey',
    grey_05: "rgba(89, 89, 89, 0.5)",
    grey_08: 'rgba(103, 103, 110,0.8)',
    grey_09: 'rgba(103, 103, 110,0.9)',
};


export interface ColorsCustomType<T> {
    white: T,
    purple: T,
    light_purple: T,
    cured: T,
    // step indicate from the checkout page
    // ////////////////////////////////////////////////////////////////////////////////
    // NOTE: THE BELOW COLOR MAY NOT RELATED TO YOUR REBRANDING & NOT COMMON STYLE
    // ////////////////////////////////////////////////////////////////////////////////
    // login screen color
    login: {
        facebook: T,
        google: T,
        sms: T,
    },
    category: {
        main_category: T,
        sub_category: T,
        sub_category_2: T
    },
    // common
    error: T,
    accent: T,
    accentLight: T,
    black_text_primary: T,
    chart: {
        background: T,
        orange: T,
        blue_white: T,
        blue: T,
        purple_white: T,
        green: T,
        purple: T,
        lime_green: T,
        cyan: T
    }
    black: T,
    background: T,
    // Text
    Text: T,
    spin: T,
    dashboard: {
        summary: {
            green: T,
            light_green: T,
            purple: T,
            light_purple: T,
            red: T,
            light_red: T,
        },
    }
    light_grey: T,
    very_light_grey: T,
    dark_orange: T,
    dark_yellow: T,
    yellow: T,
    dark_red: T,
    red: T,
    green: T,
    light_green: T,
    blue: T,
    light_blue: T,
    blue1: T,
    blue2: T,
    starRating: T,
    background_flash_sales: [T, T],
    light_red: T,
    very_light_red: T,
    very_light_green: T,
    lime_green: T,
    grey: T,
    white_07: T,
    white_08: T,
    white_09: T,
    grey_05: T,
    grey_08: T,
    grey_09: T,
}

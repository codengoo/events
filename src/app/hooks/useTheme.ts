import { useState } from "react";
import { ETheme } from "../types";
import { useAppSelector } from "./useStore";
import { selectTheme } from "../store/features";

interface IThemeProps {
    theme?: ETheme;
}

export default function useTheme({ theme: _theme }: IThemeProps) {
    const { theme: oldTheme, background: oldBg } = useAppSelector(selectTheme);

    const [background, setBackground] = useState<string | null>(oldBg);
    const [theme, setTheme] = useState<ETheme>(!!_theme ? _theme : oldTheme);

    return {
        background,
        setBackground,
        theme,
        setTheme
    }
}
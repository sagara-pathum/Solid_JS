import { createSignal } from "solid-js";

export const [darkTheme, setDarkTheme] = createSignal(false);

export function changeThemeDark() {
    setDarkTheme(!darkTheme());
}

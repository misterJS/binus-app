export const useQuery = () => {
    const get = (key: string) => {
        const url = new URL(window.location.href);
        const { searchParams: param } = url;
        return param.get(key);
    };

    const set = (key: string, value?: string | number) => {
        const url = new URL(window.location.href);
        const { searchParams: param } = url;

        if (value) {
            param.set(key, String(value));
        } else {
            param.delete(key);
        }

        window.history.replaceState({}, "", url.toString());
    };

    return { get, set };
}
import { API_BASE_URL } from "../data/config";

const apiFetch = async (endpoint, options = {}, isSecured = true, expectFile = false) => {
    const headers = {};

    if (options.headers) {
        Object.assign(headers, options.headers);
    }

    headers['Accept'] = 'application/json';
    if (isSecured) {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            throw new Error("No token found in localStorage");
        }
        headers['Authorization'] = `Token ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: headers
    });

    if (expectFile) {
        if (!response.ok) {
            throw new Error('Error fetching file');
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        return { fileURL: url, blob };
    } else {
        if (!response.ok) {
            const json = await response.json();
            throw new Error(json.message || 'Something went wrong');
        }

        if (response.status !== 204) {
            return await response.json();
        } else {
            return null;
        }
    }
}

export default apiFetch;

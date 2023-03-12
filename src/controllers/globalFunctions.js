export const handleResponse = (response) => {
    return {
        status: 200,
        response: {
            success: true,
            data: response
        }
    }
}
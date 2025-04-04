export default function hasApiErrorCode(error: any, codes: any) {
    const code = error?.response?.data?.code;
    return codes.includes(code);
}

export function normalizeZipcode(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
}

export function normalizePhone(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

export function normalizeCpf(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
    value = value.replace(/(-\d{2})\d+?$/, "$1");
    return value;
}

export function normalizeBirthdate(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    return value;
}

export function normalizeMinimumWage(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^0+/, "");
    value = value.replace(/(\d{1,2})$/, ",$1");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    value = "R$ " + value;
    return value;
}

import Swal from 'sweetalert2';

export const getApiUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    url = cleanEndSlash(url);
    return url;
}

export function cleanMultiSlash(endpoint, replaceWith = '/') {
    endpoint = endpoint.replace(/\/{2,}/g, replaceWith);
    return endpoint;
}

export function cleanStartingSlash(endpoint) {
    endpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    return endpoint;
}

export function cleanEndSlash(endpoint) {
    endpoint = endpoint.endsWith('/') ? endpoint.substring(0, endpoint.length - 1) : endpoint;
    return endpoint;
}

export function swalError(message, title = 'Error!') {
    Swal.fire({
        title: title,
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
    });
}

export function swalSuccess(message, title = 'Successful') {
  Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK',
  });
}

export function calculateAgeInYears(birth_date) {
  const days =
    (new Date().getTime() - birth_date.getTime()) / 1000 / 60 / 60 / 24;
  const years = (days / 365).toFixed(0);
  return Number(years);
}

export function calculateBMI(height_cm, weight_kg) {
  const height_meter = height_cm / 100;
  const bmi = weight_kg / height_meter ** 2;
  return Number(bmi.toFixed(1));
}
// Kiểu dữ liệu cho một lần nhận diện
export type Detection = {
  plate: string;
  timestamp: string;
  status: 'registered' | 'visitor';
};
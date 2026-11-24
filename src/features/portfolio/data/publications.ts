import type { Publication } from "../types/publications"

export const PUBLICATIONS: Publication[] = [
  {
    id: "jipi",
    title: "Deteksi Sampah Organik dan Anorganik Menggunakan Model YOLOv8",
    journal: "JIPI (Jurnal Ilmiah Penelitian dan Pembelajaran Informatika)",
    date: "2024-06-25",
    url: "https://jurnal.stkippgritulungagung.ac.id/index.php/jipi/article/view/5965",
    description:
      "Penelitian ini berfokus pada pengembangan model untuk mendeteksi sampah organik dan anorganik menggunakan algoritma YOLOv8. Deteksi sampah yang efektif sangat penting untuk pengelolaan limbah yang berkelanjutan. Dataset yang digunakan terdiri dari 1178 citra sampah organik dan anorganik yang dikumpulkan dari Roboflow, dibagi menjadi set pelatihan, validasi, dan pengujian. Model YOLOv8 dilatih menggunakan teknik transfer learning selama 30 epoch dengan ukuran gambar 640x640 piksel. Evaluasi dilakukan terhadap metrik performa seperti precision, recall, mean Average Precision (mAP), dan Intersection over Union (IoU) dalam kondisi Gaussian blur, darkness, low resolution, dan motion blur. Hasil menunjukkan model mencapai performa terbaik pada kondisi normal dengan precision, recall, dan IoU yang tinggi serta waktu pemrosesan yang efisien. Kondisi Gaussian blur menunjukkan precision sempurna namun sedikit penurunan pada recall dan akurasi lokal. Kondisi darkness dan low resolution menunjukkan sedikit penurunan metrik dan peningkatan waktu pemrosesan. Motion blur adalah kondisi paling menantang, dengan penurunan signifikan pada precision, recall, dan IoU. Rekomendasi mencakup peningkatan recall pada Gaussian blur, efisiensi pemrosesan dalam kondisi darkness, serta peningkatan deteksi dan akurasi dalam kondisi motion blur.",
  },
]

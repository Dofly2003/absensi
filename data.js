export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nama, nim, prodi } = req.body;

    if (!nama || !nim || !prodi) {
      return res.status(400).json({ message: "Data tidak lengkap" });
    }

    console.log("Data diterima:", { nama, nim, prodi });

    // TODO: simpan ke DB (Supabase/Firebase/MongoDB)
    // sementara langsung balikin responsenya
    res.status(200).json({
      message: "Data berhasil diterima",
      data: { nama, nim, prodi },
    });
  } else if (req.method === "GET") {
    res.status(200).json({ message: "Endpoint aktif untuk data mahasiswa" });
  } else {
    res.status(405).json({ message: "Method tidak diizinkan" });
  }
}

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        const json = await res.json();
        if (json.data) setData(json.data);
      } catch (err) {
        console.error("Gagal ambil data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📋 Daftar Absensi Mahasiswa</h1>
      <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Nama</th>
            <th>NIM</th>
            <th>Prodi</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4" align="center">Belum ada data</td>
            </tr>
          ) : (
            data.map((mhs, idx) => (
              <tr key={idx}>
                <td>{mhs.nama}</td>
                <td>{mhs.nim}</td>
                <td>{mhs.prodi}</td>
                <td>{new Date(mhs.waktu).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

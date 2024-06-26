const express = require('express');
const router = express.Router();
const devisi = require('./devisi');
const histori_jabatan = require('./histori_jabatan');
const histori_pangkat = require('./histori_pangkat');
const members = require('./members');
const surat = require('./surat');
const surat_keterangan_tugas = require('./surat_keterangan_tugas');
const users = require('./users');
const auth = require('./auth');

router.get("/", (req, res) => {
    res.status(200).json({
        status : true,
        message : "Welcone to API Arsip Digital",
        version : 1.1
    });
});

router.use("/auth", auth);
router.use("/devisi", devisi);
router.use("/historijabatan", histori_jabatan);
router.use("/historipangkat", histori_pangkat);
router.use("/members", members);
router.use("/surat", surat);
router.use("/suratketerangantugas", surat_keterangan_tugas);
router.use("/users", users);

module.exports = router;
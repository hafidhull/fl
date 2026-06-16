    const PAGES = [
      { img: '1.png', audio: [] },
      { img: '2.png', audio: [] },
      { img: '3.png', audio: [{ label: 'a i u e o', file: 'a i u e o.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '4.png', audio: [
          { label: 'ba', file: 'ba.mp3', x: 50, y: 77, w: 30, h: 6 },
          { label: 'ca', file: 'ca.mp3', x: 50, y: 84, w: 30, h: 6 },
          { label: 'da', file: 'da.mp3', x: 50, y: 91, w: 30, h: 6 }
        ] },
      { img: '5.png', audio: [
          { label: 'da1', file: 'da.mp3', x: 50, y: 77, w: 30, h: 6 },
          { label: 'da2', file: 'da.mp3', x: 50, y: 84, w: 30, h: 6 },
          { label: 'da3', file: 'da.mp3', x: 50, y: 91, w: 30, h: 6 }
        ] },
      { img: '6.png', audio: [
          { label: 'sa1', file: 'sa.mp3', x: 50, y: 77, w: 30, h: 6 },
          { label: 'sa2', file: 'sa.mp3', x: 50, y: 84, w: 30, h: 6 },
          { label: 'sa3', file: 'sa.mp3', x: 50, y: 91, w: 30, h: 6 }
        ] },
      { img: '7.png', audio: [
          { label: 'ma1', file: 'ma.mp3', x: 50, y: 77, w: 30, h: 6 },
          { label: 'ma2', file: 'ma.mp3', x: 50, y: 84, w: 30, h: 6 },
          { label: 'ma3', file: 'ma.mp3', x: 50, y: 91, w: 30, h: 6 }
        ] },
      { img: '8.png', audio: [
          { label: 'ya1', file: 'ya.mp3', x: 50, y: 77, w: 30, h: 6 },
          { label: 'ya2', file: 'ya.mp3', x: 50, y: 84, w: 30, h: 6 },
          { label: 'ya3', file: 'ya.mp3', x: 50, y: 91, w: 30, h: 6 }
        ] },
      { img: '9.png', audio: [
          { label: 'bi', file: 'bi.mp3', x: 46, y: 77, w: 24, h: 6 },
          { label: 'ci', file: 'ci.mp3', x: 46, y: 84, w: 24, h: 6 },
          { label: 'di', file: 'di.mp3', x: 46, y: 91, w: 24, h: 6 },
          { label: 'si', file: 'si.mp3', x: 78, y: 77, w: 24, h: 6 },
          { label: 'mi', file: 'mi.mp3', x: 78, y: 84, w: 24, h: 6 },
          { label: 'yi', file: 'yi.mp3', x: 78, y: 91, w: 24, h: 6 }
        ] },
      { img: '10.png', audio: [] },
      { img: '11.png', audio: [
          { label: 'na', file: 'na.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'ni', file: 'ni.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'nu', file: 'nu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '12.png', audio: [
          { label: 'ka', file: 'ka.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'ki', file: 'ki.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'ku', file: 'ku.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '13.png', audio: [
          { label: 'pa', file: 'pa.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'pi', file: 'pi.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'pu', file: 'pu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '14.png', audio: [
          { label: 'pa', file: 'pa.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'pi', file: 'pi.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'pu', file: 'pu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '15.png', audio: [
          { label: 'la', file: 'la.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'li', file: 'li.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'lu', file: 'lu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '16.png', audio: [
          { label: 'ta', file: 'ta.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'ti', file: 'ti.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'tu', file: 'tu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '17.png', audio: [
          { label: 'ra', file: 'ra.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'ri', file: 'ri.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'ru', file: 'ru.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '18.png', audio: [
          { label: 'ra', file: 'ra.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'ri', file: 'ri.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'ru', file: 'ru.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '19.png', audio: [
          { label: 'ha', file: 'ha.mp3', x: 50, y: 79, w: 30, h: 6 },
          { label: 'hi', file: 'hi.mp3', x: 50, y: 86, w: 30, h: 6 },
          { label: 'hu', file: 'hu.mp3', x: 50, y: 93, w: 30, h: 6 }
        ] },
      { img: '20.png', audio: [] },
      { img: '21.png', audio: [] },
      { img: '22.png', audio: [{ label: 'ba', file: 'ba.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '23.png', audio: [{ label: 'bi', file: 'bi.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '24.png', audio: [{ label: 'banu', file: 'bamu.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '25.png', audio: [{ label: 'buku', file: 'buku.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '26.png', audio: [{ label: 'batu', file: 'batu.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '27.png', audio: [{ label: 'baju', file: 'baju.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '28.png', audio: [{ label: 'bola', file: 'bola.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '29.png', audio: [{ label: 'guru', file: 'guru.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '30.png', audio: [{ label: 'ibu', file: 'ibu.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '31.png', audio: [{ label: 'ida', file: 'ida.mp3', x: 50, y: 50, w: 40, h: 40 }] },
      { img: '32.png', audio: [
          { label: 'sepeda', file: 'sepeda.mp3', x: 52, y: 68, w: 35, h: 12 },
          { label: 'banu', file: 'bamu.mp3', x: 52, y: 85, w: 35, h: 12 }
        ] },
      { img: '33.png', audio: [
          { label: 'sepeda', file: 'sepeda.mp3', x: 52, y: 68, w: 35, h: 12 },
          { label: 'banu', file: 'bamu.mp3', x: 52, y: 85, w: 35, h: 12 }
        ] },
      { img: '34.png', audio: [
          { label: 'roda', file: 'roda.mp3', x: 52, y: 68, w: 35, h: 12 },
          { label: 'banu', file: 'bamu.mp3', x: 52, y: 85, w: 35, h: 12 }
        ] },
      { img: '35.png', audio: [
          { label: 'roda', file: 'roda.mp3', x: 52, y: 65, w: 35, h: 12 },
          { label: 'topi biru', file: 'topi biru.mp3', x: 52, y: 83, w: 35, h: 12 }
        ] },
      { img: '36.png', audio: [
          { label: 'ibu', file: 'ibu.mp3', x: 52, y: 60, w: 35, h: 12 },
          { label: 'guru', file: 'guru.mp3', x: 52, y: 75, w: 35, h: 12 },
          { label: 'rumah', file: 'rumah.mp3', x: 52, y: 90, w: 35, h: 12 }
        ] },
      { img: '37.png', audio: [
          { label: 'ibu', file: 'ibu.mp3', x: 52, y: 65, w: 35, h: 12 },
          { label: 'guru', file: 'guru.mp3', x: 52, y: 83, w: 35, h: 12 }
        ] },
      { img: '38.png', audio: [
          { label: 'ibu', file: 'ibu.mp3', x: 52, y: 65, w: 35, h: 12 },
          { label: 'guru', file: 'guru.mp3', x: 52, y: 83, w: 35, h: 12 }
        ] },
      { img: '39.png', audio: [
          { label: 'Pasangkanlah', file: 'Pasangkanlah.mp3', x: 50, y: 15, w: 30, h: 10 },
          { label: 'roda', file: 'roda.mp3', x: 50, y: 30, w: 30, h: 10 },
          { label: 'sepeda', file: 'sepeda.mp3', x: 50, y: 45, w: 30, h: 10 },
          { label: 'sepatu', file: 'sepatu.mp3', x: 50, y: 60, w: 30, h: 10 },
          { label: 'topi biru', file: 'topi biru.mp3', x: 50, y: 75, w: 30, h: 10 }
        ] },
      { img: '40.png', audio: [
          { label: 'Pasangkanlah', file: 'Pasangkanlah.mp3', x: 50, y: 15, w: 30, h: 10 },
          { label: 'baju', file: 'baju.mp3', x: 50, y: 30, w: 30, h: 10 },
          { label: 'buku', file: 'buku.mp3', x: 50, y: 45, w: 30, h: 10 },
          { label: 'sepatu', file: 'sepatu.mp3', x: 50, y: 60, w: 30, h: 10 },
          { label: 'guru', file: 'guru.mp3', x: 50, y: 75, w: 30, h: 10 }
        ] },
      { img: '41.png', audio: [
          { label: 'hore', file: 'hore kamu hebat yu bermain lagi besok.mp3', x: 50, y: 50, w: 40, h: 20 }
        ] },
      { img: '42.png', audio: [
          { label: 'rapihkan', file: 'Rapihkan kembali mainan mu.mp3', x: 50, y: 50, w: 40, h: 20 }
        ] },
      { img: '43.png', audio: [
          { label: 'simpanlah', file: 'Simpan lah di tempat semula.mp3', x: 50, y: 50, w: 40, h: 20 }
        ] },
      { img: '44.png', audio: [] },
      { img: '45.png', audio: [] }
    ];


import FormJadwal from './FormJadwal';
import Footer from './Footer';

function Jadwal() {
    const Jadwal= {
      color: "white",
      padding: "60px",
    };

    return (
   <>
   <h1 style={Jadwal}>Lihat jadwal bus keberangkatan/tiba anda disini</h1>
    <FormJadwal/>
    <Footer/>
    </>
    );

    

  }


  export default Jadwal;

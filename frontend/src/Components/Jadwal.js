
import Formulir from './Formulir';

function Jadwal() {
    const Jadwal= {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "60px",
      fontFamily: "Sans-Serif"
    };

    return (
   <>
   <h1 style={Jadwal}>Lihat jadwal bus keberangkatan/tiba anda disini</h1>
    <Formulir/>
    </>
    );

  }


  export default Jadwal;

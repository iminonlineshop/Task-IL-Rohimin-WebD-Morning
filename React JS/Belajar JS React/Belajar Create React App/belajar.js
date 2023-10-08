console.log("Selamat Datang di JalanKarirku");

function Hello () {
    const name = "Cyborg";
    const major = "Informatics"
    return (
        <div>
            <h2>Hallo JalanKarirku</h2>
            <p>Saya {name} - Admin JalanKarirku</p>
            <p>Jurusan saya {major}</p>
        </div>
    );
}

ReactDOM.render(<Hello/>, document.getElementById("root"));

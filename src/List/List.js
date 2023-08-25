

function List() {
    let shaharlar = ["Buxoro", "Toshkent", "Farg'ona", "Xorazm"]
    // shaharlar = []
    // if (shaharlar.length === 0)
    //     return (
    //         <>
    //         <input></input>
    //         </>
    // )
    // else
    function clickLi() {
        return console.log("Bosildi")
    }
    const selectedIndex = 2
    return (
        <>
        <div className="container">
         <ul className="list-group">
            {
            shaharlar.length === 0 ? 

            <p>Shaharlar mavjud emas</p>:

           shaharlar.map((item, index) => (
            <li className={selectedIndex === index && index > 4 ? 'list-group-item active' : 'list-group-item'} key={item} onClick={clickLi} >{item} {index}</li>
           ))
           }
        
        </ul>
        </div>
        </>
    )
} 

export default List
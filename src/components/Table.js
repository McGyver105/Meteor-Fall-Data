const Table = (props) => {
    return (
        <tr>
            <td>{props.meteorOne.name}</td> 
            <td>{props.meteorOne.id}</td>
            <td>{props.meteorOne.mass}</td>
            <td>{props.meteorOne.recclass}</td>
            <td>{props.meteorOne.year.slice(0,4)}</td>
        </tr>
    )
}

export default Table;
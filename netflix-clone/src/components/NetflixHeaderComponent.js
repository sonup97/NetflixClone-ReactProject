

export default function NetflixHeaderComponent(){
    return(
        <>
        <div className="d-flex justify-content-between m-3  p-3">
        <div>
            <h2 className="text-danger">NETFLIX</h2>
        </div>
        <div className="input-group w-25">
            <select className="form-select">
                <option value="">Language</option>
                <option value="">English</option>
                <option value="">Hindi</option>
            </select>
            <button className="btn btn-danger ms-2">Signin</button>
        </div>
        </div>
        </>
        )
}
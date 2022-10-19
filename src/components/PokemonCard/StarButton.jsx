const StarButton = ({ isFavorite, onClick }) => {
    const Icon = isFavorite ? <i className="fas fa-star text-amber-500"></i> : <i className="far fa-star"></i>
    return (
        <div onClick={onClick} className="px-1 cursor-pointer text-md">
            {Icon}     
        </div>
    )
}

export default StarButton
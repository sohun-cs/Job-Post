
const CategoryCard = ({ job }) => {

    const { jobTitle, deadline, description, category, minPrice, maxPrice } = job;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    {jobTitle}
                </h2>
                <p>{category}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{minPrice}</div>
                    <div className="badge badge-outline">{maxPrice}</div>
                </div>
                <div className="badge badge-outline">{deadline}</div>
            </div>
        </div>
    );
};

export default CategoryCard;
import PropTypes from "prop-types";

const SpendTime = ({spendTime}) => {
    return (
        <div className='w-full border mb-3 rounded-md border-purple-500 bg-purple-100'>
            <p className='text-center py-5 text-purple-600 font-bold '>Spend time on read : {spendTime}</p>
        </div>
    );
};
SpendTime.propTypes = {
    spendTime : PropTypes.number.isRequired
}

export default SpendTime;
import React from 'react'
import PropTypes from 'prop-types'

const HeaderImage = props => {
    return (
        <div>
            <img className="shadow rounded-lg shadow-2xl border" width="1000" height="800" src="../images/vegetables.jpg" alt="my image" />
        </div>
    )
}

HeaderImage.propTypes = {

}

export default HeaderImage
